import Link from 'next/link'
import styles from './imagemComBotao.module.css'

export default function imagemComBotao({ imagem, titulo, texto, textoBotao, link }) {
  const img = {
    '--bg-image': `url(${imagem})`
  };
  return (
    <>
      <div className={styles.container} style={img}>
        <h3 className={styles.titulo}>{titulo}</h3>
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