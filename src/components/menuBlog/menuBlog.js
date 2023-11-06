import { useState } from 'react'
import Styles from './menuBlog.module.css'
import CardPosts from '../cardPosts'
import GridPosts from '../gridPosts'




export default function MenuBlog( ...posts) {
    const handleChange = (event) =>{
        filter(`${event.target.value}`, arrPosts); //a função pega o valor passado pelo campo "value" de cada opção e guarda no hook
    } 
    posts = posts[0]
    var genderSelection = []
   
  
    var arrPosts = [];
    for( const i in posts){

        arrPosts.push(posts[i]);
    }
    const [filteredPosts, setFilteredPosts] = useState(arrPosts)
arrPosts.map((arrPosts) =>{genderSelection.push(arrPosts.genero)});
const filteredgenders = [...new Set(genderSelection)];

const filter  = (select, arrPosts) =>{
    let aux  =  arrPosts;
    (select == "TODOS")? aux =  arrPosts: 
     aux = arrPosts.filter((obj) =>obj.genero == select )
    setFilteredPosts(aux)
}


    return (
        <>
        <div className={Styles.container}>
            <div className={Styles.menuContainer}>
                <ul className={Styles.lista}>
                    <li key={'mobile'}>
                        <div >
                            <select className={Styles.buttonMobile} onChange={handleChange}>
                            <option value={"TODOS"}> Todos</option>

                            {filteredgenders.map((filteredgenders) => ( <option> 
                            {filteredgenders}
                            </option>
                        ))}

                            </select>

                        </div>
                    </li>
                        <li key={'todos'}>
                            <button  className={Styles.button} onClick={() => filter("TODOS", arrPosts)}> Todos </button>
                        </li>

                        {filteredgenders.map((filteredgenders) => ( <li key={filteredgenders.titulo}>
                            <button className={Styles.button} onClick={() => {filter(filteredgenders, arrPosts) }}> 
                            {filteredgenders}
                            </button>
                            </li>
                        ))}
                </ul>
            </div>

            
            <GridPosts {...filteredPosts}/>
            
            
         

         
    </div>                           
        </> 
    )
}