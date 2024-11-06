"use client";

import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const WeatherChart = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const temperatureSeriesRef = useRef(null);
  const humiditySeriesRef = useRef(null);

  useEffect(() => {
    // Configuración inicial del gráfico
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        backgroundColor: '#FFFFFF',
        textColor: '#333',
      },
      grid: {
        vertLines: { color: '#F0F3FA' },
        horzLines: { color: '#F0F3FA' },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // Configura las series para temperatura y humedad
    temperatureSeriesRef.current = chartRef.current.addLineSeries({
      color: '#FF0000', // Rojo para temperatura
      lineWidth: 2,
    });

    humiditySeriesRef.current = chartRef.current.addLineSeries({
      color: '#0000FF', // Azul para humedad
      lineWidth: 2,
    });

    return () => {
      chartRef.current.remove();
    };
  }, []);

  useEffect(() => {
    // Conexión al WebSocket de nuestro servidor Node.js
    const socket = new WebSocket('ws://localhost:3000');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const temperatureData = { time: data.timestamp, value: data.temperature };
      const humidityData = { time: data.timestamp, value: data.humidity };

      // Actualiza los datos en el gráfico
      temperatureSeriesRef.current.update(temperatureData);
      humiditySeriesRef.current.update(humidityData);
    };

    socket.onopen = () => {
      console.log('Conectado al servidor de datos en tiempo real');
    };

    socket.onerror = (error) => {
      console.error('Error en la conexión de WebSocket:', error);
    };

    // Cierra el WebSocket al desmontar el componente
    return () => {
      socket.close();
    };
  }, []);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default WeatherChart;
