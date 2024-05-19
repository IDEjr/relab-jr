import GridPosts from "@/components/gridPosts";
import styles from "./menuBlog.module.css";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function MenuBlog({ posts }) {
  const [isActive, setIsactive] = useState(false);
  const [titulo, setTitulo] = useState("Todos");
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
    select == "Todos"
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
        <li key={"Todos"} tabIndex={0}>
          <button
            className={atual === "Todos" ? styles.active : styles.button}
            onClick={() => filter("Todos", posts)}
            tabIndex={0}
          >
            <p className={styles.buttonText}>Todos</p>
          </button>
        </li>
        {filteredgenders.map((filteredgenders) => (
          <li key={filteredgenders}>
            <button
              className={
                atual === filteredgenders ? styles.active : styles.button
              }
              onClick={() => {
                filter(filteredgenders, posts);
              }}
            >
              <p className={styles.buttonText} >{filteredgenders}</p>
            </button>
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={styles.container}>
        {/* div que engloba todo o componente */}
        <div className={styles.menuContainer}>
          {/* div que engloba apenas a parte do menu */}
          <ul className={styles.lista}>
            <div className={styles.containerMobile}>
              {/* div mobile */}
              <div className={styles.tituloEBotaoMobile}>
                <h3 className={styles.tituloMobile}>
                  {titulo}
                </h3>
                <div
                  onClick={() => setIsactive(!isActive)}
                  className={styles.optionButton}
                >
                {isActive ? <GoChevronUp className={styles.icone} /> : <GoChevronDown className={styles.icone} />} 
                </div>
              </div>
              <div className={styles.aaa}>
              <div
                className={`
                ${styles.dropdownInactive}
                  ${isActive ? styles.dropdownActive : null}
                  `
                }
              >
                {isActive && <RenderOptions />}
                {/*possui uma pequena redundância, necessária para deixar a animação mais fluída*/}
              </div>
              </div>
            </div>

            <div className={styles.containerDesktop}>
              {/* div desktop, renderizado acima de 800px */}
              <RenderOptions />
            </div>
          </ul>
        </div>
        <div className={styles.gridPosts}>
          <GridPosts posts={filteredPosts} />{" "}
          {/* rederização dos posts filtrados */}
        </div>
      </div>
    </>
  );
}
