import Link from 'next/link'
import Image from 'next/image'
import styles from './inicio.module.css'


export default function inicio(props) {  
  return (
    <>
      <div className={styles['container']}>
        <Image src={props.image} width={1920}  height={400} alt='Imagem Inicio' className={styles['initImg']}/>
        <h1 className={styles['title']}>{props.title}</h1>
      </div>
    </>
  );
}