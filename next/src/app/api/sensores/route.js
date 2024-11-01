import { procesarLecturaSensor } from "@/controllers/CreateRegister";
import { NextResponse } from "next/server";

// Exporta el método POST con una exportación nombrada
export const POST = async (request) => {
  try {
    // Lee el JSON del cuerpo de la solicitud
    const datosJSON = await request.json();

    // Procesa la lectura del sensor con los datos recibidos
    const response = await procesarLecturaSensor(datosJSON);

    // Devuelve una respuesta JSON con el mensaje de éxito y los datos guardados
    return NextResponse.json(
      { message: "Lecturas guardadas correctamente", data: response },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en la API:", error);

    // Devuelve una respuesta JSON con el mensaje de error
    return NextResponse.json(
      { message: error?.message || "Error al procesar la solicitud" },
      { status: 400 }
    );
  }
};
