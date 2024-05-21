import styles from './textoServicos.module.css'


export default function TextoServicos({ titulo, texto }) {
  return(
    <>
      <div className={styles.mainContainer}>
        <h3 className={styles.titleContainer}>
          {titulo}
        </h3>
        {/* <div className={styles.textContainer}> */}
          <p className={styles.textContainer}>
            {texto}
          </p>
        {/* </div> */}
        <div className={styles.bar}></div>
      </div>
    </>
  )
}