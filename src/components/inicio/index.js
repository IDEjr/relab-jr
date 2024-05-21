import Image from 'next/image'
import styles from './inicio.module.css'


export default function Inicio( props ) {  
  return (
    <>
      <div className={styles.container}>
        <Image
          src={props.imagem}
          fill
          style={{objectFit: 'cover'}}
          alt='Imagem Inicio'
          className={styles.initImg}
        />
        <h1 className={styles.title}>{props.titulo}</h1>
      </div>
    </>
  );
}