import Image from 'next/image'
import styles from './escoposServicos.module.css'


function servicoL( servico ) {
  return(
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.imageLeftContainer}>
          <Image
            src={servico.imagem}
            style={{objectFit: 'cover'}}
            fill
            alt={servico.nome}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.titleContainer}>{servico.nome}</h2>
          <div className={styles.underBar}></div>
          <p className={styles.descriptionContainer}>
            {servico.descricao}
          </p>
        </div>
      </div>
    </>
  )
}

function servicoR( servico ) {
  return(
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.imageMobileContainer}>
          <Image
            src={servico.imagem}
            style={{objectFit: 'cover'}}
            fill
            alt={servico.servico}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.titleContainer}>{servico.nome}</h2>
          <div className={styles.underBar}></div>
          <p className={styles.descriptionContainer}>
            {servico.descricao}
          </p>
        </div>
        <div className={styles.imageRightContainer}>
          <Image
            src={servico.imagem}
            style={{objectFit: 'cover'}}
            fill
            alt={servico.servico}
          />
        </div>
      </div>
    </>
  )
}


export default function EscoposServicos({ servicos }) {

  return(
    <>
      <ul className={styles.mainContainer}>
        {servicos && servicos.map((servico, i) => (
          <div key={i}>
            {i % 2 === 0 ? (
              servicoL(servico)
              ) : (
              servicoR(servico)
            )}
          </div>
        ))}
      </ul>
    </>
  )
}