'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidate.init({
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATE,
    genero: DataTypes.STRING,
    coligacao: DataTypes.STRING,
    partido: DataTypes.STRING,
    url: DataTypes.STRING,
    orcamentoGasto: DataTypes.INTEGER,
    numeroEleicao: DataTypes.INTEGER,
    limiteLegalDeGasto: DataTypes.INTEGER,
    candidatoAReeleicao: DataTypes.BOOLEAN,
    estadoCivil: DataTypes.STRING,
    raca: DataTypes.STRING,
    grauDeInstrucao: DataTypes.STRING,
    nacionalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidate',
    tableName: 'Candidates',
    paranoid: true
  });
  return Candidate;
};