import Image from 'next/image'
import styles from './escoposServicos.module.css'
import { useMediaQuery } from 'react-responsive'


function servicoL( servico, imagem, descricao ) {
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
          <div className={styles.titleContainer}>{servico}</div>
          <div className={styles.underBar}></div>
          <div className={styles.descriptionContainer}>
            {descricao}
          </div>
        </div>
      </div>
    </>
  )
}

function servicoR( servico, imagem, descricao ) {
  return(
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>{servico}</div>
          <div className={styles.underBar}></div>
          <div className={styles.descriptionContainer}>
            {descricao}
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
      <ul className={styles.mainContainer}>
        {servicos && servicos.map((servico, i) => (
          <div key={i}>
          {i % 2 === 0 ? (
            servicoL(servico.servico, servico.imagem, servico.descricao)
            ) : (
            servicoR(servico.servico, servico.imagem, servico.descricao)
          )}
        </div>
        ))}
      </ul>
    </>
  )
}