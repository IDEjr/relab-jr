import Link from 'next/link'
import styles from './imagemComBotao.module.css'

export default function ImagemComBotao({ imagem, titulo, texto, textoBotao, link }) {
  const img = {
    '--bg-image': `url(${imagem})`
  };
  return (
    <>
      <div className={styles.container} style={img}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.texto}>{texto}</p>
        <div className={styles.boxBotao}>
          <Link href={link}>
            <button>
              {textoBotao}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}