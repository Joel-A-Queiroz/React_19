import "./App.css";
import { Banner } from "./Componentes/Banner";
import { CardEvento } from "./Componentes/CardEvento";
import { FormularioDeEvento } from "./Componentes/FormularioDeEvento";
import { Tema } from "./Componentes/Tema";

//No React, componentes são funções:

//Props é um objeto
//Props. children

function App() {
  const temas = [
    {
      id: 1,
      nome: "Front-End",
    },
    {
      id: 2,
      nome: "Back-End",
    },
    {
      id: 3,
      nome: "Devops",
    },
    {
      id: 4,
      nome: "inteligencia Artificial",
    },
    {
      id: 5,
      nome: "Data Science",
    },
    {
      id: 6,
      nome: "Cloud",
    },
  ];

  const eventos = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no front",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png?" alt="imagem-de-logo-tipo" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos[0]} />
          </section>
        );
      })}

      {/*<section>
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
      </section>*/}
    </main>
  );
}

export default App;
