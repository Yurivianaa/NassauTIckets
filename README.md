# NassauTIckets

Sistema de Controle de Atendimento para um Laboratório de Análises Clínicas.

## Descrição

O **nassauTickets** é um Sistema de Controle de Atendimento desenvolvido para um Laboratório de Análises Clínicas.

O sistema tem como finalidade controlar a emissão, organização, chamada e atendimento de senhas, além de disponibilizar um painel de chamadas e relatórios relacionados aos atendimentos.

## Objetivo

O objetivo do projeto é desenvolver um sistema Web capaz de organizar o fluxo de atendimento do laboratório por meio do gerenciamento de senhas, filas, chamadas e atendimentos.

O sistema deverá contemplar os diferentes tipos de senha definidos na especificação, o atendimento pelos guichês, o painel de chamadas e os relatórios necessários para o acompanhamento dos atendimentos.

## Tecnologias

### Frontend

* **React**

### Backend

A especificação do projeto permite a utilização de uma das seguintes opções:

* **Node.js LTS 22 com Express**
* **Java 21 com Spring Boot**
* **Python 3.14 com Flask/FastAPI**

A tecnologia de backend será definida durante o desenvolvimento e sua escolha será justificada tecnicamente neste documento.

### Banco de Dados

* **MySQL 8.0**

## Arquitetura

O projeto será organizado em três partes principais:

### Frontend

O frontend será responsável pela interface Web do sistema e deverá ser desenvolvido utilizando **React**.

Localização:

```text
frontend/
```

### Backend

O backend será responsável pelo processamento das regras de negócio, comunicação com o banco de dados e atendimento às requisições realizadas pelo frontend.

Localização:

```text
backend/
```

### Banco de Dados

O banco de dados será responsável pelo armazenamento das informações necessárias ao funcionamento do sistema, incluindo informações relacionadas às senhas, chamadas, atendimentos e auditoria.

## Estrutura do Projeto

```text
nassauTickets/
├── backend/
├── docs/
│   ├── branding/
│   ├── mer/
│   ├── mockups/
│   ├── models/
│   │   └── uml/
│   └── requirements/
├── frontend/
├── .gitignore
├── LICENSE
└── README.md
```

## Documentação

A documentação do projeto está organizada dentro da pasta `docs/`.

### Branding

```text
docs/branding/
```

Diretório destinado aos materiais relacionados à identidade visual do projeto.

### MER

```text
docs/mer/
```

Diretório destinado ao Modelo Entidade-Relacionamento e seus respectivos artefatos.

### Mockups

```text
docs/mockups/
```

Diretório destinado aos mockups e protótipos das interfaces do sistema.

### UML

```text
docs/models/uml/
```

Diretório destinado aos diagramas UML do projeto.

### Requisitos

```text
docs/requirements/
```

Diretório destinado aos requisitos funcionais, requisitos não funcionais, regras de negócio e demais documentos relacionados aos requisitos do sistema.

## Instalação

### Pré-requisitos

Para o desenvolvimento e execução do frontend, será necessário possuir o **Node.js** instalado.

Os demais pré-requisitos serão definidos conforme as tecnologias e componentes forem implementados.

### Clonar o Repositório

```bash
git clone URL_DO_REPOSITORIO
```

Depois, entre na pasta do projeto:

```bash
cd nassauTickets
```

## Execução

A execução do frontend será realizada a partir da pasta `frontend/`.

```bash
cd frontend
```

Após a configuração do projeto React e instalação de suas dependências, o comando de execução será documentado nesta seção.

> Os comandos definitivos de instalação e execução serão atualizados conforme a implementação do projeto for realizada.

## Configuração

As configurações necessárias para execução do projeto serão documentadas nesta seção conforme o desenvolvimento avançar.

Serão documentadas, quando aplicável:

* configuração do frontend;
* configuração do backend;
* conexão com o banco de dados;
* variáveis de ambiente;
* demais configurações necessárias para execução do sistema.

## Branches

O projeto utiliza as seguintes branches principais:

* `main` — branch principal do projeto;
* `dev` — branch utilizada para o desenvolvimento.

O desenvolvimento deverá ser realizado inicialmente na branch `dev`.

Após a conclusão e validação das alterações, o conteúdo desenvolvido deverá ser integrado à branch `main` por meio de merge.

## Membros

| Nome                          | Matrícula    | Papel                                                  |
| ----------------------------- | ------------ | ------------------------------------------------------ |
| **Willams Yuri Viana Amorim** | **01902333** | Scrum Master / Documentador / Desenvolvedor / Testador |

## Versionamento

O projeto utiliza **Git** para controle de versão.

Os commits deverão ser pequenos e objetivos, representando etapas reais do desenvolvimento.

### Exemplos

```text
chore: cria estrutura inicial do projeto
docs: adiciona requisitos do sistema
docs: atualiza README
feat: cria estrutura inicial do frontend
feat: implementa emissão de senha
fix: corrige regra de prioridade
```

## Status do Projeto

O projeto está em desenvolvimento.

A primeira fase contempla a preparação do repositório, organização da estrutura, documentação principal, configuração do versionamento e início da implementação do frontend utilizando React.


