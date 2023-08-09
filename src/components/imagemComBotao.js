import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/imagemComBotao.module.css'

export default function imagemComBotao({ imagem, titulo, texto, texto_botao }) {
    return (
      <>
          
          <div className={styles['container']}>
          <Image
          src={imagem} 
          fill
          // width={100%}
          // height={100%}
          alt="Imagem Resultados"
          className={styles['background']}/>
          {/* <div className={styles['box']}> */}
            <h2 className={styles['titulo']}>{titulo}</h2>
            <p className={styles['texto']}>{texto}</p>
            <div className={styles['box_botao']}>
              <Link
              href='servicos' className={styles['botao']}>{texto_botao}
              </Link>
            </div>
          {/* </div> */}
          </div>
        </>
      );
    }