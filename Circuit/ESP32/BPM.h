#ifndef BMP280_SENSOR_H
#define BMP280_SENSOR_H

#include <Wire.h>
#include <SPI.h>
#include <Adafruit_BMP280.h>
#include <array>

extern Adafruit_BMP280 bmp;
extern Adafruit_Sensor *bmp_temp;
extern Adafruit_Sensor *bmp_pressure;

char* BMP_BeginSensor();
void BMP_PrintDetails();
std::array<float, 2> BMP_DataSensor();

#endif