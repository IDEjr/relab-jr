import Link from 'next/link'
import Image from 'next/image'
import styles from './cardMembros.module.css'

export default function cardMembros({ nome, foto, posição, linkedin }) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['box']}>
          <h2 className={styles['titulo']}>{titulo}</h2>
          <p className={styles['texto']}>{texto}</p>
        </div>
      </div>
    </>
  );
}