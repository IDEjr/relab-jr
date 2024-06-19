import Image from 'next/image'
import styles from './servicosHome.module.css'
import Link from 'next/link'


function Servico( servico ) {
  
  const id = servico.nome.replace(/ /g, '_');

  return(
    <>
      <Link href={`/servicos/#${id}`}>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceName}>
            <h3>{servico.nome}</h3>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={servico.imagem}
              className={styles.serviceImg}
              fill
              style={{objectFit: 'cover'}}
              quality={100}
              alt="Logo"
            />
          </div>
        </div>
      </Link>
    </>
  )
}


export default function ServicosHome({ titulo, servicos }) {

  return(
    <>
      <div className={styles.container}>
        <h2 className={styles.titleText}>{titulo}</h2>
        <div className={styles.serviceFrame}>
          {servicos && servicos.map((servico, i) => (
            <div key={i}>
                {Servico(servico)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}