import { useState } from 'react'
import Styles from './menuBlog.module.css'
import CardPosts from '../cardPosts'
import GridPosts from '../gridPosts'
import { GoChevronDown } from "react-icons/go";


export default function MenuBlog({posts}) {
  const [isActive, setIsactive] = useState(false)
  const [titulo, setTitulo] = useState("TODOS")
  const [atual, setAtual]  = useState(false)

  // posts = posts[0]
  var genderSelection = []
  // var arrPosts = [];

  // for (const i in posts) {
  //   arrPosts.push(posts[i]);
  // }

  const [filteredPosts, setFilteredPosts] = useState(posts)

  posts.map((posts) => { genderSelection.push(posts.genero) });
  const filteredgenders = [...new Set(genderSelection)];

  const filter = (select, posts) => {

    let aux = posts;
    (select == "TODOS") ? aux = posts :
      aux = posts.filter((obj) => obj.genero == select)

    setFilteredPosts(aux)
    setTitulo(select)
    setIsactive(false)
    setAtual(select)
  }

  const RenderOptions = () => {
    return (
      <>
        <li key={'todos'} tabIndex={0} className={Styles.teste}>
          <button className={atual === "TODOS"? Styles.active: Styles.button} onClick={() => filter("TODOS", posts)} tabIndex={0} > Todos </button>
        </li>
        {filteredgenders.map((filteredgenders) => (
          <li key={filteredgenders.titulo}>
            <button className={atual === filteredgenders? Styles.active: Styles.button} onClick={() => { filter(filteredgenders, posts) }}>
              {filteredgenders}
            </button>
          </li>
        ))}
      </>
    )
  }

  return (
    <>
      <div className={Styles.container}>  {/* div que engloba todo o componente */}
        <div className={Styles.menuContainer}> {/* div que engloba apenas a parte do menu */}
          <ul className={Styles.lista}>
            <div className={Styles.containerMobile}>  {/* div mobile */}
              <div className={Styles.tituloEBotaoMobile}>
              <h3 className={Styles.tituloMobile} ><p className={Styles.p}>{titulo}</p></h3>
              <h4 onClick={() => setIsactive(!isActive)} className={Styles.optionButton}  ><GoChevronDown className={Styles.icone} /></h4>
              </div>
              <div className={Styles.optionsMobile}> {isActive && (<RenderOptions />)}</div>            
            </div>
            <div className={Styles.containerDesktop}> {/* div desktop */}               
              <RenderOptions/>            
            </div>
          </ul>
        </div>
        <div className={Styles.gridPosts}>
        <GridPosts posts = {filteredPosts} />
        </div>
      </div>
    </>
  )
}