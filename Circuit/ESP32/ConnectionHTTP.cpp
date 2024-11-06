#include "ConnectionHTTP.h"

const uint16_t httpsPort = 443;
WiFiClientSecure client;

String connectionBackend(const char* URL_SERVER, const char* ENDPOINT, const char* root_ca, float temperatura,  float presion, float humedad,  boolean Details) {
    static char errorBuffer[100];
    char buffer[1024] = {0};
    int index = 0;

    if(Details)
    {
      Serial.print("Servidor: ");
      Serial.println(URL_SERVER);
      Serial.print("Endpoint: ");
      Serial.println(ENDPOINT);
      Serial.print("Intentando conectar a ");
      Serial.print(URL_SERVER);
      Serial.print(":");
      Serial.println(httpsPort);
    }
    
    
    // Configurar certificado
    client.setCACert(root_ca);

    
    
    if (!client.connect(URL_SERVER, httpsPort)) {
        client.lastError(errorBuffer, sizeof(errorBuffer));
        Serial.println("Conexión fallida");
        Serial.print("Último error: ");
        Serial.println(errorBuffer);
    }

    // Construir la petición HTTP
    String jsonBody = "{\"temperatura\": " + String(temperatura, 1) + 
                  ", \"presion\": " + String(presion,1) + 
                  ", \"humedad\": " + String(humedad,1) + "}";

    // Calcular la longitud del JSON
    int contentLength = jsonBody.length();

    // Construir la solicitud completa
    String request = String("POST ") + ENDPOINT + " HTTP/1.1\r\n" +
                    "Host: " + URL_SERVER + "\r\n" +
                    "Content-Type: application/json\r\n" +
                    "Connection: close\r\n" +
                    "Content-Length: " + contentLength + "\r\n\r\n" +
                    jsonBody;
    if(Details){
      Serial.println("Petición a enviar:");
      Serial.println(request);
    }
    
    client.print(request);

    while (client.connected()) {
        String line = client.readStringUntil('\n');
        if (line == "\r"){
          Serial.println("headers received");
          break;
        }
    }

    while(client.available() && index < sizeof(buffer) - 1) {
      buffer[index] = client.read();
      index++;
    }
    buffer[index] = '\0';
    client.stop();
    String fullResponse = String(buffer);
    return fullResponse;
}