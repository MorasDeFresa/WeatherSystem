#include "WiFiCredentials.h"
#include "WiFi.h"
#include <WiFiClient.h>
#include "BPM.h"
#include "DHT_Moisture.h"
#include "ConnectionHTTP.h"

IPAddress ESP32_IP;
boolean Details = false;

unsigned long previousMillis = 0;
const unsigned long interval = 120000;
bool firstExecution = true;

void setup() {
  Serial.begin(115200);
  BeginSensors();
  WifiConnection();
  delay(500);
  
}

void loop() {
  //ReadData();
  Api();
}

std::array<float, 3> ReadData(){
  std::array<float, 2> DHT_DATA = DHT11_DataSensor();
  std::array<float, 2> BMP_DATA = BMP_DataSensor();
  std::array<float, 3> FINAL_DATA = {BMP_DATA[0], BMP_DATA[1], DHT_DATA[1]};
  if(Details)
  {
    Serial.println("-------------------------------------------------------");
    Serial.println("Temperatura  Humedad  Presion atmosferica");
    Serial.print(BMP_DATA[0]);
    Serial.print("   ");
    Serial.print(DHT_DATA[1]);
    Serial.print("   ");
    Serial.print(BMP_DATA[1]);
    Serial.println("   ");
    Serial.println("-------------------------------------------------------");
  }
  return FINAL_DATA;
}

void Api()
{
  unsigned long currentMillis = millis();
  if (firstExecution || (currentMillis - previousMillis >= interval)) {
    std::array<float,3> data = ReadData();
    Serial.println("----------------------------------");
    Serial.println("API CONSUME");
    String response = connectionBackend(URL_SERVER, ENDPOINT, root_ca,data[0],data[1],data[2], Details);
    Serial.println(response);
    Serial.println("----------------------------------");
    previousMillis = currentMillis; 
    firstExecution = false;
  }
}

void BeginSensors(){
  Serial.println("Report Sensors");
  char* BMP_STATUS =  BMP_BeginSensor();
  Serial.print("Start BMP280");
  while(strcmp(BMP_STATUS, "BMP280 WORKS!!!") != 0){
    BMP_STATUS =  BMP_BeginSensor();
    Serial.print(".");
  }
  Serial.println(".");
  Serial.println(BMP_STATUS);
  char * DHT_STATUS = DHT11_BeginSensor();
  Serial.print("Start DHT11");
  while(strcmp(DHT_STATUS, "DHT11 WORKS!!!") != 0){
    DHT_STATUS = DHT11_BeginSensor();
    Serial.print("..");
  }
  Serial.println(".");
  Serial.println(DHT_STATUS);
  Serial.println("----------------------------------");
}

void VerifyConnection(){
  if(WiFi.status() == WL_CONNECTED){
    Serial.println("----------------------------------");
    Serial.print("Successful connection SSID:");
    Serial.println(WIFI_SSID);
    Serial.print("IP ESP32: ");
    Serial.println(ESP32_IP);
    Serial.println("----------------------------------");
  }
}

void WifiConnection()
{
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  Serial.print(" ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(".");
  ESP32_IP = WiFi.localIP();
  VerifyConnection();
}