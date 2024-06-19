import styles from './menuBlog.module.css'
import GridPosts from '@/components/gridPosts'
import { useState } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'


export default function MenuBlog({ posts, generos }) {
  const [isActive, setIsactive] = useState(false);
  const [titulo, setTitulo] = useState("Todos");
  const [atual, setAtual] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  var genreSelection = [];

  generos.map((generos) => {
    genreSelection.push(generos.genero);
  });

  const filteredGenres = [...new Set(genreSelection)];

  const filter = (select, posts) => {
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
        {filteredGenres.map((filteredGenres) => (
          <li key={filteredGenres}>
            <button
              className={
                atual === filteredGenres ? styles.active : styles.button
              }
              onClick={() => {
                filter(filteredGenres, posts);
              }}
            >
              <p className={styles.buttonText}>{filteredGenres}</p>
            </button>
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <ul className={styles.lista}>
            <div className={styles.containerMobile}>
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
                className={
                  `${styles.dropdownInactive}
                  ${isActive ? styles.dropdownActive : null}`
                }
              >
                {isActive && <RenderOptions />}
              </div>
              </div>
            </div>
            <div className={styles.containerDesktop}>
              <RenderOptions />
            </div>
          </ul>
        </div>
        <div className={styles.gridPosts}>
          <GridPosts posts={filteredPosts} />{" "}
        </div>
      </div>
    </>
  );
}
