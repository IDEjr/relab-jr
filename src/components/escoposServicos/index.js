import Image from 'next/image'
import styles from './escoposServicos.module.css'
import { useMediaQuery } from 'react-responsive'


function servicoL(imagem, nome, posicao) {
  return(
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.imagemContainer}>
          <Image
            src={imagem}
            style={{objectFit: 'cover'}}
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>{nome}</div>
          <div className={styles.underBar}></div>
          <div className={styles.descriptionContainer}>
            {posicao}
          </div>
        </div>
      </div>
    </>
  )
}

function servicoR(imagem, nome, posicao) {
  return(
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>{nome}</div>
          <div className={styles.underBar}></div>
          <div className={styles.descriptionContainer}>
            {posicao}
          </div>
        </div>
        <div className={styles.imagemContainer}>
          <Image
            src={imagem}
            style={{objectFit: 'cover'}}
            fill
          />
        </div>
      </div>
    </>
  )
}


export default function escoposServicos( {servicos} ) {

  return(
    <>
      <ul className={styles.membrosGrid}>
        {servicos && servicos.map((servico, i) => (
          <div key={i}>
          {i % 2 === 0 ? (
            servicoL(servico.imagem, servico.nome, servico.posicao)
            ) : (
            servicoR(servico.imagem, servico.nome, servico.posicao)
          )}
        </div>
        ))}
      </ul>
    </>
  )
}