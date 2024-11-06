const data = require ("@/data/data.json");
const {TipoMedicion, UnidadesDeMedida, Sensores} = require ("@/lib/db")

export const CreateInitialData = async()=>{
    for (let index = 0; index < data?.TipoMedicion?.length; index++) {
       TipoMedicion.create({
        nombreTipoMedicion:data?.TipoMedicion[index]?.nombreTipoMedicion
       });  
    }
    for (let index = 0; index < data?.UnidadesDeMedida?.length; index++) {
        UnidadesDeMedida.create({
        nombreUnidadMedida:data?.UnidadesDeMedida[index]?.nombreUnidadMedida,
        simboloUnidad:data?.UnidadesDeMedida[index]?.simboloUnidad
       });  
    }
    for (let index = 0; index < data?.Sensores?.length; index++) {
        Sensores.create({
        referenciaSensor:data?.Sensores[index]?.referenciaSensor,
        idTipoMedicion:data?.Sensores[index]?.idTipoMedicion,
       });    
    }
}