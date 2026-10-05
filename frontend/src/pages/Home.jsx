import { useState } from "react";
import Header from "../components/Header";

function Home() {
  const [senhaSelecionada, setSenhaSelecionada] = useState("");

  return (
    <main>
      <Header title="nassauTickets" />

      <p>
        Sistema de Controle de Atendimento para um Laboratório de Análises Clínicas.
      </p>

      <h2>Emissão de senha</h2>

      <button onClick={() => setSenhaSelecionada("SP")}>
        Senha Prioritária
      </button>

      <button onClick={() => setSenhaSelecionada("SG")}>
        Senha Geral
      </button>

      <button onClick={() => setSenhaSelecionada("SE")}>
        Senha para retirada de Exames
      </button>

      {senhaSelecionada && (
        <p>
          Tipo de senha selecionado: <strong>{senhaSelecionada}</strong>
        </p>
      )}
    </main>
  );
}

export default Home;