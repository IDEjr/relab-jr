import { useState } from 'react'
import Styles from './menuBlog.module.css'
import CardPosts from '../cardPosts'
import GridPosts from '../gridPosts'




export default function MenuBlog(...posts) {
    const [isActive, setIsactive] = useState(false)
    const [titulo, setTitulo] = useState("TODOS")

    posts = posts[0]
    var genderSelection = []
    var arrPosts = [];

    for (const i in posts) {
        arrPosts.push(posts[i]);
    }

    const [filteredPosts, setFilteredPosts] = useState(arrPosts)

    arrPosts.map((arrPosts) => { genderSelection.push(arrPosts.genero) });
    const filteredgenders = [...new Set(genderSelection)];

    const filter = (select, arrPosts) => {
        let aux = arrPosts;
        (select == "TODOS") ? aux = arrPosts :
            aux = arrPosts.filter((obj) => obj.genero == select)
        setFilteredPosts(aux)
        setTitulo(select)
        setIsactive(false)
    }


    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.menuContainer}>
                    <ul className={Styles.lista}>
                        <div>
                            <div className={Styles.containerMobile}>
                                <h3 className ={Styles.tituloMobile} ><p>{titulo}</p></h3>
                                <h4  className ={Styles.mais}onClick={() => setIsactive(!isActive) }>Outros</h4>
                            </div>
                            
                            
                            
                            {isActive && (
                                <div className={Styles.optionsMobile}>
                                       <li> <button className={Styles.buttonMobile} onClick={() => filter("TODOS", arrPosts)}> Todos </button> </li>
                                    {filteredgenders.map((filteredgenders) => (<li key={filteredgenders.titulo}>
                                        <button className={Styles.buttonMobile} onClick={() => { filter(filteredgenders, arrPosts) }}>
                                            {filteredgenders}
                                        </button>
                                    </li>
                                    ))}
                                </div>
                            )}
                        
                        </div>


                        <li key={'todos'} className={Styles.optionDesktop}>
                            <button className={Styles.button} onClick={() => filter("TODOS", arrPosts)}> Todos </button>
                        </li>
                        
                        {filteredgenders.map((filteredgenders) => (<li key={filteredgenders.titulo} className={Styles.optionDesktop}>
                            <button className={Styles.button} onClick={() => { filter(filteredgenders, arrPosts) }}>
                                {filteredgenders}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>


                <GridPosts {...filteredPosts} />





            </div>
        </>
    )
}