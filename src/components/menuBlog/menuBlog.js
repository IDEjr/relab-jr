import { useState } from 'react'
import Styles from './menuBlog.module.css'


export default function textoBarraQuemSomos() {

    const [text, setText] = useState("TODOS")


    return (
        <>
            <div className={Styles.container}>
                <ul className={Styles.lista}>
                    <li>
                        <button className={Styles.button}><p className={Styles.buttonText}>{text}</p></button>
                    </li>
                    <li>
                        <div >

                            <select className={Styles.button}>

                                <option  onClick={() => setText('aaaa')}>TODOS</option>

                                <option value="vegetable">Vegetable</option>

                                <option value="meat">Meat</option>

                            </select>

                        </div>                    
                    </li>
                    <li>
                        <button className={Styles.button}><p className={Styles.buttonText}>TODOS</p></button>
                    </li>
                    <li>
                        <button className={Styles.button}><p className={Styles.buttonText} >ECONOMIA</p></button>
                    </li>

                    <li>
                        <button className={Styles.button} ><p className={Styles.buttonText}>GESTÃO</p></button>
                    </li>

                    <li>
                        <button className={Styles.button} ><p className={Styles.buttonText}>GÊNERO3</p></button>
                    </li>

                    <li>
                        <button className={Styles.button} ><p className={Styles.buttonText}>GÊNERO4</p></button>
                    </li>


                </ul>
            </div>
        </>
    )
}