import { useState } from "react";
import Styles from "./menuBlog.module.css";
import GridPosts from "../gridPosts";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function MenuBlog({ posts }) {
  const [isActive, setIsactive] = useState(false);
  const [titulo, setTitulo] = useState("TODOS");
  const [atual, setAtual] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  var genderSelection = [];

  posts.map((posts) => {
    genderSelection.push(posts.genero);
  }); // armazena os generos dos posts em genderSelection
  const filteredgenders = [...new Set(genderSelection)];

  const filter = (select, posts) => {
    //função que faz a filtragem dos generos e passa para os states
    let aux = posts;
    select == "TODOS"
      ? (aux = posts)
      : (aux = posts.filter((obj) => obj.genero == select));
    setFilteredPosts(aux);
    setTitulo(select);
    setIsactive(false);
    setAtual(select);
  };

  const RenderOptions = () => {
    //função que renderiza as opções do menu
    return (
      <>
        <li key={"todos"} tabIndex={0}>
          <button
            className={atual === "TODOS" ? Styles.active : Styles.button}
            onClick={() => filter("TODOS", posts)}
            tabIndex={0}
          >
            Todos
          </button>
        </li>
        {filteredgenders.map((filteredgenders) => (
          <li key={filteredgenders}>
            <button
              className={
                atual === filteredgenders ? Styles.active : Styles.button
              }
              onClick={() => {
                filter(filteredgenders, posts);
              }}
            >
              {filteredgenders}
            </button>
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={Styles.container}>
        {/* div que engloba todo o componente */}
        <div className={Styles.menuContainer}>
          {/* div que engloba apenas a parte do menu */}
          <ul className={Styles.lista}>
            <div className={Styles.containerMobile}>
              {/* div mobile */}
              <div className={isActive? Styles.activeBotao :Styles.tituloEBotaoMobile}>
                <h3 className={Styles.tituloMobile}>
                  <p className={Styles.p}>{titulo}</p>
                </h3>
                <h4
                  onClick={() => setIsactive(!isActive)}
                  className={Styles.optionButton}
                >
                 {isActive ? <GoChevronUp className={Styles.icone} /> : <GoChevronDown className={Styles.icone} />} 
                </h4>
              </div>
              <div className={Styles.aaa}>
              <div
                className={`
                ${Styles.dropdownInactive}
                  ${isActive ? Styles.dropdownActive : null}
                  `
                }
              >
                {isActive && <RenderOptions />}
                {/*possui uma pequena redundância, necessária para deixar a animação mais fluída*/}
              </div>
              </div>
            </div>

            <div className={Styles.containerDesktop}>
              {/* div desktop, renderizado acima de 800px */}
              <RenderOptions />
            </div>
          </ul>
        </div>
        <GridPosts posts={filteredPosts} />{" "}
        {/* rederização dos posts filtrados */}
      </div>
    </>
  );
}
