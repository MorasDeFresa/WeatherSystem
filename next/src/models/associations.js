const Sensores = require('./Sensores');
const LecturaSensor = require('./LecturaSensor');
const UnidadesDeMedida = require('./UnidadesDeMedida');
const TipoMedicion = require('./TipoMedicion');

const association = (sequelize) => {

  const models = {
    Sensores: Sensores(sequelize),
    LecturaSensor: LecturaSensor(sequelize),
    UnidadesDeMedida: UnidadesDeMedida(sequelize),
    TipoMedicion: TipoMedicion(sequelize)
  };

};


const handlerAssociationModels = (sequelize ) => {
  const {
    Sensores,
    LecturaSensor,
    UnidadesDeMedida,
    TipoMedicion,

  } = sequelize.models;

  Sensores.hasMany(LecturaSensor, {
    foreignKey: 'idSensor',
    as: 'lecturas', 
  });

  LecturaSensor.belongsTo(Sensores, {
    foreignKey: 'idSensor',
    as: 'sensor',
  });

  UnidadesDeMedida.hasMany(LecturaSensor, {
    foreignKey: 'idUnidadMedida',
    as: 'lecturas',
  });

  LecturaSensor.belongsTo(UnidadesDeMedida, {
    foreignKey: 'idUnidadMedida',
    as: 'unidadMedida',
  });

  TipoMedicion.hasMany(Sensores, {
    foreignKey: 'idTipoMedicion',
    as: 'sensores', 
  });

  Sensores.belongsTo(TipoMedicion, {
    foreignKey: 'idTipoMedicion',
    as: 'tipoMedicion',
  });

  // return { 
  //   Sensores: Sensores, 
  //   LecturaSensor: LecturaSensor, 
  //   UnidadesDeMedida: UnidadesDeMedida,
  //   TipoMedicion: TipoMedicion 
  // };
//   const handleModels = () => {
//     Sensores:Sensores()
//   }
};

export {association, handlerAssociationModels}