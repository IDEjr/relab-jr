import Link from 'next/link'
import styles from './imagemComBotao.module.css'

export default function ImagemComBotao({ imagem, titulo, texto, textoBotao, link }) {

  const img = {
    '--bg-image': `url(${imagem})`
  };

  const handleMove = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <>
      <div className={styles.container} style={img}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.texto}>{texto}</p>
        <div className={styles.boxBotao}>
          <Link href={link} onClick={handleMove}>
            <button>
              {textoBotao}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}