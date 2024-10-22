#include "BPM.h"

Adafruit_BMP280 bmp; // use I2C interface
Adafruit_Sensor *bmp_temp = bmp.getTemperatureSensor();
Adafruit_Sensor *bmp_pressure = bmp.getPressureSensor();


char* BMP_BeginSensor(){
  while ( !Serial ) delay(100);
  unsigned status;
  static char result[20];
  status = bmp.begin(0x76);
  if (!status) {
    strcpy(result,"BMP280 sensor not found");
    return result;
  }

  /* Default settings from datasheet. */
  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */
                  Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */
                  Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */
                  Adafruit_BMP280::FILTER_X16,      /* Filtering. */
                  Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */
  strcpy(result,"BMP280 WORKS!!!");
  return result;
}

void BMP_PrintDetails(){
  bmp_temp->printSensorDetails();
}

std::array<float, 2> BMP_DataSensor(){
  sensors_event_t temp_event, pressure_event;
  bmp_temp->getEvent(&temp_event);
  bmp_pressure->getEvent(&pressure_event);
  return {temp_event.temperature, pressure_event.pressure};
}