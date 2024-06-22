import styles from './textoBarraHome.module.css'

export default function TextoBarraHome({ texto }) {

  return(
    <>
      <div className={styles.container}>
        <div className={styles.bar}></div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {texto}
          </p>
        </div>
      </div>
    </>
  )
}