#include "DHT_Moisture.h"

#define DHTPIN 2
#define DHTTYPE DHT11

// Inicialización de objetos
DHT_Unified dht(DHTPIN, DHTTYPE);
uint32_t delayMS;

char* DHT11_BeginSensor() {
    static char result[25]; // Cambiado message por result
    dht.begin();
    
    sensors_event_t event;
    dht.temperature().getEvent(&event);
    
    if (isnan(event.temperature)) {
        dht.humidity().getEvent(&event);
        if (isnan(event.relative_humidity)) {
            strcpy(result, "DHT11 sensor not found");
            return result;
        }
    }
    strcpy(result, "DHT11 WORKS!!!"); // Cambiado message por result
    return result;
}

void DHT11_PrintDetails() {
    sensor_t sensor;
    dht.temperature().getSensor(&sensor);
    Serial.println(F("------------------------------------"));
    Serial.println(F("Temperature Sensor"));
    Serial.print  (F("Sensor Type: ")); Serial.println(sensor.name);
    Serial.print  (F("Driver Ver:  ")); Serial.println(sensor.version);
    Serial.print  (F("Unique ID:   ")); Serial.println(sensor.sensor_id);
    Serial.print  (F("Max Value:   ")); Serial.print(sensor.max_value); Serial.println(F("°C"));
    Serial.print  (F("Min Value:   ")); Serial.print(sensor.min_value); Serial.println(F("°C"));
    Serial.print  (F("Resolution:  ")); Serial.print(sensor.resolution); Serial.println(F("°C"));
    Serial.println(F("------------------------------------"));
}

std::array<float, 2> DHT11_DataSensor() {
    std::array<float, 2> data = {0.0f, 0.0f};
    sensors_event_t event;
    
    // Leer temperatura
    dht.temperature().getEvent(&event);
    if (!isnan(event.temperature)) {
        data[0] = event.temperature;
    }
    
    // Leer humedad
    dht.humidity().getEvent(&event);
    if (!isnan(event.relative_humidity)) {
        data[1] = event.relative_humidity;
    }
    
    return data;
}