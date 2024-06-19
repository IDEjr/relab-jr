import styles from './textoServicos.module.css'


export default function TextoServicos({ titulo, texto }) {
  return(
    <>
      <div className={styles.mainContainer}>
        <h3 className={styles.titleContainer}>
          {titulo}
        </h3>
          <p className={styles.textContainer}>
            {texto}
          </p>
        <div className={styles.bar}></div>
      </div>
    </>
  )
}