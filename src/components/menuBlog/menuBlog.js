import { useState } from 'react'
import Styles from './menuBlog.module.css'
import CardPosts from '../cardPosts'
import GridPosts from '../gridPosts'




export default function MenuBlog( ...posts) {
    const [assunto, setAssunto] = useState("TODOS")
    
    const handleChange = (event) =>{
        setAssunto(`${event.target.value}`); //a função pega o valor passado pelo campo "value" de cada opção e guarda no hook
    } 



    posts = posts[0]
    var genderSelection = []
   
  
    var arrPosts = [];
    for( const i in posts){

        arrPosts.push(posts[i]);
    }
arrPosts.map((arrPosts) =>{genderSelection.push(arrPosts.genero)});



    const filteredgenders = [...new Set(genderSelection)];
    return (
        <>
        <div className={Styles.container}>
            <div className={Styles.menuContainer}>
                <ul className={Styles.lista}>
                    <li>
                        <div >

                            <select className={Styles.buttonMobile} onChange={handleChange}>
                            <option value={"TODOS"}> Todos</option>
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
         
    </div>                           
        </> 
    )
}