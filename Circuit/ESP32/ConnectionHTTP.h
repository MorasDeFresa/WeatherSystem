#ifndef CONNECTION_HTTP
#define CONNECTION_HTTP

#include <WiFiClientSecure.h>
#include <array>

String connectionBackend(const char* URL_SERVER, const char* ENDPOINT, const char* root_ca, float temperatura,  float presion, float humedad,  boolean Details);
#endif