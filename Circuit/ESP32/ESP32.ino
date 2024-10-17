#include "WiFiCredentials.h"
#include "WiFi.h"
#include <WiFiClient.h>

IPAddress ESP32_IP;

void setup() {
  Serial.begin(115200);
  WifiConnection();
  delay(500);
}

void loop() {
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