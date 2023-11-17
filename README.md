# API_Clinica_Veterinaria

Microsserviço Clínica Veterinária Introdução Este projeto é uma prova de conceito (POC) para um novo microsserviço que será utilizado por uma franquia veterinária para gerenciar clientes e atendimentos. O microsserviço expõe uma API REST que permite aos usuários criar, ler, atualizar e excluir tutores e pets.

Características O microsserviço Clínica Veterinária oferece suporte aos seguintes recursos:

Criar, ler, atualizar e excluir tutores Crie, leia, atualize e exclua pets Associe pets a tutores

Tecnologias O microsserviço Clínica Veterinária é construído usando as seguintes tecnologias:

Typescript Express MongoDB

Para executar o microsserviço Clínica Veterinária localmente, siga estas etapas:

Clone o repositório em sua máquina local. Instale as dependências necessárias: Bash yarn install

Use o código com cuidado. Saiba mais Inicie o servidor de desenvolvimento: Bash npm run dev

Use o código com cuidado. Saiba mais Abra o seguinte URL em seu navegador: http://localhost:8000/api/ Documentação da API O microsserviço Clínica Veterinária expõe os seguintes endpoints da API REST:

Tutores GET /tutors: Recupera todos os tutores.
<br/>
POST /tutor: Cria um novo tutor.
<br/>
PUT /tutor/:id Atualiza um tutor.
<br/>
DELETE /tutor/id Exclui um tutor. Animais de estimação
<br/>
POST /pet/:tutorId: Cria um pet e o adiciona a um tutor.
<br/>
PUT /pet/:petId/tutor/:tutorId: Atualiza as informações de um pet.
<br/>
DELETE /pet/:petId/tutor/:tutorId: Exclui um pet de um tutor.
