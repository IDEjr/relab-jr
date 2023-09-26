import { useState } from 'react'
import Styles from './menuBlog.module.css'
import CardPosts from '../cardPosts'

export default function MenuBlog({ posts }) {

    const [assunto, setAssunto] = useState("TODOS")
    const handleChange = (event) =>{
        setAssunto(`${event.target.value}`); //a função pega o valor passado pelo campo "value" de cada opção e guarda no hook
    }
    
    let genderSelection = []
    let gender = [posts.map((posts) =>(genderSelection.push(posts.genero)))]
    const filteredgenders = [...new Set(genderSelection)];

    return (
        <>
            <div className={Styles.container}>
                <ul className={Styles.lista}>
            
                    <li>
                        <div >

                            <select className={Styles.buttonMobile} onChange={handleChange}>
                            <option value={"TODOS"}> TODOS</option>
                                {filteredgenders.map((filteredgenders) => (
                                    <option value={filteredgenders}  className={Styles.button}>{filteredgenders}</option>
                                ))}
                            </select>

                        </div>
                    </li>
                        <li><button  className={Styles.button} onClick={() => setAssunto(`TODOS`)}> TODOS</button></li>
                        {filteredgenders.map((filteredgenders) => ( <li>
                            <button className={Styles.button} onClick={() => { setAssunto(`${filteredgenders}`) }}> 
                            {filteredgenders}
                            </button>
                            </li>
                        ))}
                   
                </ul>
            </div>
            {posts.map((posts, i) => ( //a função faz um map e verifica se foi selecionado algum filtro ou se está na posição todos
                assunto == "TODOS" ? <CardPosts 
                key={i}
                titulo={post.titulo}
                data={post.data}
                previa={post.previa}
            />: post.genero == assunto ? <CardPosts
            key={i}
            titulo={post.titulo}
            data={post.data}
            previa={post.previa}
        />: ''
            ))}
                            
        </>
    )
}