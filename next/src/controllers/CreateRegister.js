

const {LecturaSensor} = require ("@/lib/db")


export const procesarLecturaSensor = async (datosJSON) => {
  const { temperatura, presion, humedad } = datosJSON;

  const idSensor1 = 1; 
  const idSensor2 = 2; 
  const idUnidadMedidaT = 1; 
  const idUnidadMedidaH = 2; 
  const idUnidadMedidaP = 3; 
  const fechaEliminado = null;
  const fechaLectura = new Date();

  try {
   
    const lecturaTemperatura = await LecturaSensor.create({
      valorLectura: temperatura,
      fechaLectura: fechaLectura,
      idSensor: idSensor1,
      idUnidadMedida: idUnidadMedidaT,
      fechaEliminado: fechaEliminado,
    });

    const lecturaPresion = await LecturaSensor.create({
      valorLectura: presion,
      fechaLectura: fechaLectura,
      idSensor: idSensor2,
      idUnidadMedida: idUnidadMedidaP,
      fechaEliminado: fechaEliminado,
    });

    const lecturaHumedad = await LecturaSensor.create({
      valorLectura: humedad,
      fechaLectura: fechaLectura,
      idSensor: idSensor2,
      idUnidadMedida: idUnidadMedidaH,
      fechaEliminado: fechaEliminado,
    });

    console.log("Lecturas guardadas:", {
      temperatura: lecturaTemperatura,
      presion: lecturaPresion,
      humedad: lecturaHumedad,
    });

    return { temperatura: lecturaTemperatura, presion: lecturaPresion, humedad: lecturaHumedad };
  } catch (error) {
    console.error("Error al crear las lecturas:", error);
    throw new Error("Error al crear las lecturas en la base de datos");
  }
};
