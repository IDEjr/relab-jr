import styles from './textoServicos.module.css'


export default function TextoServicos({ titulo, texto }) {
  return(
    <>
      <div>
        <h3 className={styles.topContainer}>
          {titulo}
        </h3>
        <div className={styles.mainContainer}>
          <p className={styles.centerContainer}>
            {texto}
          </p>
        </div>
        <div className={styles.bar}></div>
      </div>
    </>
  )
}