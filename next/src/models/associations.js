const Sensores = require('./Sensores');
const LecturaSensor = require('./LecturaSensor');
const UnidadesDeMedida = require('./UnidadesDeMedida');
const TipoMedicion = require('./TipoMedicion');

const association = (sequelize) => {
  const SensoresModel = Sensores(sequelize);  
  const LecturaSensorModel = LecturaSensor(sequelize);
  const UnidadesDeMedidaModel = UnidadesDeMedida(sequelize);
  const TipoMedicionModel = TipoMedicion(sequelize);

  SensoresModel.hasMany(LecturaSensorModel, {
    foreignKey: 'idSensor',
    as: 'lecturas', 
  });

  LecturaSensorModel.belongsTo(SensoresModel, {
    foreignKey: 'idSensor',
    as: 'sensor',
  });

  UnidadesDeMedidaModel.hasMany(LecturaSensorModel, {
    foreignKey: 'idUnidadMedida',
    as: 'lecturas',
  });

  LecturaSensorModel.belongsTo(UnidadesDeMedidaModel, {
    foreignKey: 'idUnidadMedida',
    as: 'unidadMedida',
  });

  TipoMedicionModel.hasMany(SensoresModel, {
    foreignKey: 'idTipoMedicion',
    as: 'sensores', 
  });

  SensoresModel.belongsTo(TipoMedicionModel, {
    foreignKey: 'idTipoMedicion',
    as: 'tipoMedicion',
  });

  return { 
    Sensores: SensoresModel, 
    LecturaSensor: LecturaSensorModel, 
    UnidadesDeMedida: UnidadesDeMedidaModel,
    TipoMedicion: TipoMedicionModel 
  };
//   const handleModels = () => {
//     Sensores:Sensores()
//   }
};

export {association}