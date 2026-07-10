import "./App.css";
import { Banner } from "./Componentes/Banner";
import { FormularioDeEvento } from "./Componentes/FormularioDeEvento";
import { Tema } from "./Componentes/Tema";

//No React, componentes são funções:

//Props é um objeto
//Props. children

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "Back-end",
    },
    {
      id: 3,
      nome: "Devops",
    },
    {
      id: 4,
      nome: "inteligencia artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png?" alt="imagem-de-logo-tipo" />
      </header>
      <Banner/>
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]} />
      </section>
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section>
    </main>
  );
}

export default App;
