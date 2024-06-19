import Image from 'next/image'
import styles from './escoposServicos.module.css'


function servicoL( servico ) {

  const id = servico.nome.replace(/ /g, '_');

  return(
    <>
      <div id={id}></div>
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
          <h3 className={styles.titleContainer}>{servico.nome}</h3>
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

  const id = servico.nome.replace(/ /g, '_');
  
  return(
    <>
      <div id={id}></div>
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
          <h3 className={styles.titleContainer}>{servico.nome}</h3>
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


export default function EscoposServicos({ titulo, servicos }) {

  return(
    <>
      <h2 className={styles.title}>
        {titulo}
      </h2>
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