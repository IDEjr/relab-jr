import Link from 'next/link'
import styles from './valores.module.css'
import Image from 'next/image'


export default function valores({...escritos}) {
  return(
    <>
      <section className={styles.valores}>
        <div className={styles.middle}> 
          <h2 className={styles.titleGrande}>{escritos.titulo}</h2>
        </div>
        <div className={styles.topLeft}> 
          <h3 className={styles.titleValores}>{escritos.titulo1}</h3>
          <p className={styles.textValores}>{escritos.texto1}</p>
        </div>
        <div className={styles.topRight}> 
          <h3 className={styles.titleValores}>{escritos.titulo2}</h3>
          <p className={styles.textValores}>{escritos.texto2}</p>
        </div>
        <div className={styles.bottomLeft}> 
          <h3 className={styles.titleValores}>{escritos.titulo3}</h3>
          <p className={styles.textValores}>{escritos.texto3}</p>
        </div>
        <div className={styles.bottomRight}> 
          <h3 className={styles.titleValores}>{escritos.titulo4}</h3>
          <p className={styles.textValores}>{escritos.texto4}</p>
        </div>
      </section>
    </>
  )
}