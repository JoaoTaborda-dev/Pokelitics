Roteiro para utilização da Api:

Baixar os pacotes utilizando o:

npm install

Criar o banco de dados localmente usando ao mysql:

create database hospixoval;

Executar todas as migrações:

npx sequelize db:seed:all

Executar todas as seeds:

npx sequelize db:seed:all

Consultar se os dados foram inseridos corretamente:

use hospixoval;
desc tags;
desc categorias;
Select * from tags;
Select * from categorias;

Caso seja necessario reiniciar os bancos:

DROP database hospixoval;


Rota pradrão utilizada nesta api:

http://127.0.0.1:3000/tags

Link pra baixar a collection no postman para testar a api:

https://drive.google.com/file/d/1fkhC_u957j-8gVHNBdbd7f4dTgab5D3k/view?usp=sharing

Lista de coisas a fazer:

- Definir como o banco de dados vai ser. // Feito

	Duas tabelas, uma pra colocar as tags e onde estão, outra pra colocar as tags e quais categorias pertencem.

	Tabela categorias

	id		categorias		item
	1		Banho			Toalha de rosto
	2		Banho			Toalha de corpo
	3		Cama 			Lençol
	4		Cama			Fronha


	Tabela Tags

	id(uuid)		local(binario)		idCategoria
	123451			2					3
	123123			4 					2


Lista de categorias:

1 - Banho
2 - Cama

lista de locais (Binaria):
1 bit - (Não sei)
2 bit - (Sei menos ainda)
3 bit - (Que deus me ajude)


- Alterar ou criar as seeds novas pra fazer o mockup.  // Feito

- Alterar as rotas e regras de negocio.

	- Alterar o delete, o update e o localizar por id para tags. // Feito

	- Alterar as rotas para que as categorias funcionem. // Não finalizado.