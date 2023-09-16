import Link from 'next/link'
import styles from './valores.module.css'
import Image from 'next/image'



export default function valores() {
    return(
        <>
            <section className={styles.valores}>
                <div className={styles.middle}> 
                    <h2 className={styles.titleGrande}>VALORES RELAB JR</h2>
                    
                </div>
                <div className={styles.topLeft}> 
                    <h3 className={styles.titleValores}>Disciplina</h3>
                    <p className={styles.textValores}>Com XX anos de mercado, nosso propósito é otimizar a vida de pequenos e médios negócios</p>
                </div>
             
                <div className={styles.topRight}> 
                    <h3 className={styles.titleValores}>Compromisso</h3>
                    <p className={styles.textValores}>Com XX anos de mercado, nosso propósito é otimizar a vida de pequenos e médios negócios</p>
                </div>
               
                
                <div className={styles.bottomLeft}> 
                    <h3 className={styles.titleValores}>Lealdade</h3>
                    <p className={styles.textValores}>Com XX anos de mercado, nosso propósito é otimizar a vida de pequenos e médios negócios</p>
                </div>
                
                <div className={styles.bottomRight}> 
                    <h3 className={styles.titleValores}>Trabalho</h3>
                    <p className={styles.textValores}>Com XX anos de mercado, nosso propósito é otimizar a vida de pequenos e médios negócios</p>
                </div>
            </section>
        </>
    )
}