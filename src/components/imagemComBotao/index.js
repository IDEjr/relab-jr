import Link from 'next/link'
import Image from 'next/image'
import styles from './imagemComBotao.module.css'

export default function imagemComBotao({ imagem, titulo, texto, textoBotao, link }) {
  return (
    <>
      <div className={styles['container']}>
      <Image
      src={imagem}
      // fill
      style={{objectFit: 'cover'}}
      // style={{background-size: 'cover'}}
      width={1920}
      height={1080}
      alt='Imagem Resultados'
      className={styles['background']}/>
      {/* <div className={styles['box']}> */}
        <h2 className={styles['titulo']}>{titulo}</h2>
        <p className={styles['texto']}>{texto}</p>
        <div className={styles['boxBotao']}>
          <Link
          href={link}>
          <h3 className={styles['botao']}>{textoBotao}</h3>
          </Link>
        </div>
      {/* </div> */}
      </div>
    </>
  );
}