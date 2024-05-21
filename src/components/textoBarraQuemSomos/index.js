import styles from './textoBarraQuemSomos.module.css'
import Image from 'next/image'


export default function TextoBarraQuemSomos({ texto1, texto2, logo }) {
  return (
    <>
      <div className={styles.container}> {/* inicio da div container */}
        <div className={styles.topText}>
          <p className={styles.textContent}>{texto1}</p>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.textImage}> {/* inicio da div textImage */}
          <div className={styles.lampada}>
            <Image
              src={logo}
              fill
              style={{ objectFit: 'cover' }}
              alt="Logo"
            />
          </div>
          <div className={styles.bottomText}>
            <p className={styles.textContent}>{texto2}</p>
          </div>
        </div> {/* fim da div textImage */}
      </div>{/* fim da div container */}
    </>
  )
}