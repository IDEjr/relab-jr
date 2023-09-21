import { useState } from 'react'
import Styles from './menuBlog.module.css'
import CardPosts from '../cardPosts'

export default function MenuBlog({ post }) {

    const [assunto, setAssunto] = useState("TODOS")
    const handleChange = (event) =>{
        setAssunto(`${event.target.value}`); //a função pega o valor passado pelo campo "value" de cada opção e guarda no hook
    }

    return (
        <>
            <div className={Styles.container}>
                <ul className={Styles.lista}>
            
                    <li>
                        <div >

                            <select className={Styles.button} onChange={handleChange}>
                            <option value={"TODOS"}> TODOS</option>
                                {post.map((post) => (
                                    <option value={post.assunto}  className={Styles.button}>{post.assunto}</option>
                                ))}
                            </select>

                        </div>
                    </li>
                        <li><button  className={Styles.button} onClick={() => setAssunto(`TODOS`)}> TODOS</button></li>
                        {post.map((post) => ( <li>
                            <button className={Styles.button} onClick={() => { setAssunto(`${post.assunto}`) }}> 
                            {post.assunto}
                            </button>
                            </li>
                        ))}
                   
                </ul>
            </div>
            {post.map((post, i) => ( //a função faz um map e verifica se foi selecionado algum filtro ou se está na posição todos
                assunto == "TODOS" ? <CardPosts 
                key={i}
                titulo={post.titulo}
                data={post.data}
                previa={post.previa}
            />: post.assunto == assunto ? <CardPosts
            key={i}
            titulo={post.titulo}
            data={post.data}
            previa={post.previa}
        />: ''
            ))}
                            
        </>
    )
}