'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      nascimento: {
        type: Sequelize.DATE
      },
      genero: {
        type: Sequelize.STRING
      },
      coligacao: {
        type: Sequelize.STRING
      },
      partido: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      orcamentoGasto: {
        type: Sequelize.INTEGER
      },
      numeroEleicao: {
        type: Sequelize.INTEGER
      },
      limiteLegalDeGasto: {
        type: Sequelize.INTEGER
      },
      candidatoAReeleicao: {
        type: Sequelize.BOOLEAN
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      raca: {
        type: Sequelize.STRING
      },
      grauDeInstrucao: {
        type: Sequelize.STRING
      },
      nacionalidade: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidates');
  }
};