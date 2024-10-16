#include "WiFiCredentials.h"
#include "WiFi.h"
#include <WiFiClient.h>

void setup() {
  Serial.begin(115200);
  WifiConnection();
}

void loop() {
  // put your main code here, to run repeatedly:
}

char WifiConnection()
{
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  IPAddress myIP = WiFi.localIP();
  return myIP;
}