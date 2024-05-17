import Image from 'next/image'
import styles from './escoposServicos.module.css'


function servicoL( servico, imagem, descricao ) {
  return(
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.imagemContainer}>
          <Image
            src={imagem}
            style={{objectFit: 'cover'}}
            fill
            alt={servico}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.titleContainer}>{servico}</h2>
          <div className={styles.underBar}></div>
          <p className={styles.descriptionContainer}>
            {descricao}
          </p>
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
          <h2 className={styles.titleContainer}>{servico}</h2>
          <div className={styles.underBar}></div>
          <p className={styles.descriptionContainer}>
            {descricao}
          </p>
        </div>
        <div className={styles.imagemContainer}>
          <Image
            src={imagem}
            style={{objectFit: 'cover'}}
            fill
            alt={servico}
          />
        </div>
      </div>
    </>
  )
}


export default function EscoposServicos( {servicos} ) {

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