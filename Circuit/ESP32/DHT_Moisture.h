#ifndef DHT_SENSOR_H
#define DHT_SENSOR_H

#include <Arduino.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
#include <array>


// Funciones
char* DHT11_BeginSensor();
void DHT11_PrintDetails();
std::array<float, 2> DHT11_DataSensor();

#endif