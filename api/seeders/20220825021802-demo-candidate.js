module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Candidates",
      [
        {
          id: 1234670,
          nome: "Joaquim Perna Curta",
          nascimento: "2008-11-11 13:23:44",
          genero: "Masculino",
          coligacao: "ssp",
          partido: "PT",
          url: "https://...",
          orcamentoGasto: 50000,
          numeroEleicao: 52,
          limiteLegalDeGasto: 1000000,
          candidatoAReeleicao: true,
          estadoCivil: "Solteiro",
          raca: "Pardo",
          grauDeInstrucao: "Ensino Medio Completo",
          nacionalidade: "Brasileiro",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 1234671,
          nome: "Bruno Fuinha",
          nascimento: "2008-11-11 13:23:44",
          genero: "Masculino",
          coligacao: "spp",
          partido: "PSDB",
          url: "https://...",
          orcamentoGasto: 6700,
          numeroEleicao: 75,
          limiteLegalDeGasto: 50000,
          candidatoAReeleicao: false,
          estadoCivil: "Solteiro",
          raca: "Pardo",
          grauDeInstrucao: "Ensino Medio Completo",
          nacionalidade: "Brasileiro",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 1234672,
          nome: "Sara Mão de Lula",
          nascimento: "2008-11-11 13:23:44",
          genero: "Feminino",
          coligacao: "SPP",
          partido: "PSOL",
          url: "https://...",
          orcamentoGasto: 67000,
          numeroEleicao: 37,
          limiteLegalDeGasto: 1800000,
          candidatoAReeleicao: true,
          estadoCivil: "Casada",
          raca: "Branco",
          grauDeInstrucao: "Ensino Superior Completo",
          nacionalidade: "Brasileiro",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Candidates", null, {});
  },
};