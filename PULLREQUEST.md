# Ferramentas Utilizadas

No projeto foi utilizado o framework Next.JS, além das bibliotecas axios, para efetuar as requisições http e cookie-parser, para gerenciar armazenamento de informações nos cookies.

# Páginas

Foram criadas 4 páginas sendo:

* index: carrega toda a página principal e efetua requisições de busca de dados  e de gerenciamento de favoritos utilizando o axios.
* new: Importa o componente de formulário e obtem os dados digitados pelo usuáro efetuando uma requisição para salvar os dados no Banco de Dados.
* update: Importa o componente de formulário, obtem as informações do veículo selecionado através dos cookies, organiza as informações digitadas pelo usuário e envia a requisição juntamente com o id do veículo.
* filter: Renderiza o formulário de filtro, obtendo as informações e salvando em cookies, ao clicar no botão salvar retorna a página principal que ao digitar algo no campo de busca, obtem as informações do filtro e envia a requisição.

# Icones

Todos os ícones utilizados estão no formato PNG e salvos na pasta public

# Componentes

Os componentes foram divididos em 3 pastas

* layout: nesta pasta esão todos os componentes que geram o layout da página
* VehiclesCards: contém o componente que recebe as informações importa o componente Card e renderiza na tela utilizando ```array.map()``` para gerar um card para cada veículo que se encontra no array de dados
* VehicleForm: contém o componente que renderiza o formulário utilizado para cadastrar um novo veículo ou para editar um veículo

# API

Como dito anteriormente foi utilizado o axios para realizar as requisições, na pasta Services contém o arquivo api.jsx que contém a função que cria uma URL base, dessa forma todos os arquivos que realizam requisições apenas importam essa função, sendo necessário passar apenas a rota desejada e não a url completa.

# StyledComponents

Para estilização foi utilizado o StyledComponents, biblioteca que utiliza o método 'CSS in JS', essa ferramenta cria componentes estilizados no próprio arquivo em que seram renderizados.

# Cards

Os cards são separados em 3 seções:

* Meus Anúncios: Ficam os cards em que user é igual ao usuário ativo (não foi criado sistema de autênticação, apenas uma separação simples com string), apenas esses cards seram habilitados o botão de edição

* Favoritos: todos os cards que são marcados como favoritos de qualquer usuário

* Anúncios: todos os card que não são do usuário ativo

# Formulários

Os formulários do projeto foram feitos utilizando o React Hook Form

# Video Explicativo

https://www.youtube.com/watch?v=CPYHFf3NaIc&ab_channel=HeberMagno
