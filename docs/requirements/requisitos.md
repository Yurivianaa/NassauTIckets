# Requisitos do nassauTickets

## 1. Descrição

O nassauTickets é um Sistema de Controle de Atendimento para um Laboratório de Análises Clínicas.

O sistema deverá controlar a emissão, organização, chamada e atendimento de senhas.

## 2. Agentes

### AS — Agente Sistema

Executa as ações do sistema, comunica-se com o banco de dados e demais infraestruturas, emite senhas, atualiza o painel e responde aos comandos dos demais agentes.

### AA — Agente Atendente

Responsável por chamar o próximo cliente e realizar o atendimento no guichê.

### AC — Agente Cliente

Emite sua senha por meio do totem e aguarda a chamada no painel.

## 3. Tipos de senha

- SP — Senha Prioritária
- SG — Senha Geral
- SE — Senha para retirada de Exames

## 4. Regras de atendimento

A regra de priorização deverá seguir:

SP → SE|SG → SP → SE|SG

SP possui maior prioridade.

SG possui menor prioridade.

SE possui atendimento operacional especial e deverá ser chamada após uma SP, quando disponível.

Qualquer guichê poderá atender qualquer tipo de senha.

Uma senha que não for atendida após duas chamadas deverá ser considerada não atendida.

## 5. Horário de funcionamento

O expediente deverá ocorrer das 07h às 17h.

Atendimentos iniciados deverão ser concluídos e encerrados pelo atendente.

Ao final do expediente, senhas que permanecerem na fila deverão ser descartadas.

## 6. Numeração das senhas

O padrão de numeração será:

YYMMDD-PPSQ

Onde:

- YY = ano da emissão com dois dígitos;
- MM = mês com dois dígitos;
- DD = dia do mês com dois dígitos;
- PP = tipo da senha;
- SQ = sequência da senha por prioridade, com três dígitos.

A sequência deverá reiniciar diariamente.

## 7. Máquina de estados

As senhas deverão seguir:

EMITIDA
↓
AGUARDANDO
↓
CHAMADA
↓
CHAMADA_NOVAMENTE
↓
EM_ATENDIMENTO
↓
ATENDIDA

Também poderá ocorrer:

NÃO_COMPARECEU

quando o cliente não comparecer após as chamadas previstas.

## 8. Painel de chamadas

O painel deverá apresentar as cinco últimas senhas chamadas.

A próxima senha não deverá ser exibida antecipadamente.

## 9. Funcionalidades do atendente

O atendente deverá poder:

- chamar uma nova senha;
- iniciar o atendimento;
- finalizar o atendimento;
- chamar novamente uma senha.

## 10. Relatórios

O sistema deverá contemplar relatórios diário e mensal contendo:

- quantitativo geral de senhas emitidas;
- quantitativo geral de senhas atendidas;
- quantitativo de senhas emitidas por prioridade;
- quantitativo de senhas atendidas por prioridade;
- relatório detalhado das senhas;
- tempo médio de atendimento;
- relatório de auditoria.

## 11. Login e perfis

O sistema deverá possuir login para o agente atendente.

A especificação prevê um atendente com perfil adicional de gestor, responsável pelos cadastros e relatórios.

O cliente deverá interagir anonimamente por meio do totem.

## 12. Tecnologias

O frontend deverá ser desenvolvido utilizando React.

A infraestrutura indicada contempla:

- MySQL 8.0;
- Node.js LTS 22 com Express;
- Java 21 com Spring Boot;
- Python 3.14 com Flask/FastAPI.

Para este projeto, o frontend utilizará React.