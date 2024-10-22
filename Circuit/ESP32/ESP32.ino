#include "WiFiCredentials.h"
#include "WiFi.h"
#include <WiFiClient.h>
#include "BPM.h"
#include "DHT_Moisture.h"

IPAddress ESP32_IP;

void setup() {
  Serial.begin(115200);
  WifiConnection();
  delay(500);
  BeginSensors();
}

void loop() {
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