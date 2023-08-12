import Link from 'next/link'
import Image from 'next/image'
import styles from './cardMembros.module.css'

export default function cardMembros({ nome, foto, posicao, linkedin }) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['box']}>
          <h2 className={styles['titulo']}>{nome}</h2>
          <p className={styles['texto']}>{posicao}</p>
          <Link>{linkedin}</Link>
          <Image
            src={foto}
            // fill
            style={{objectFit: 'cover'}}
            width={500}
            height={300}
            alt='Foto Membro'
            // className={styles['background']}
            />
        </div>
      </div>
    </>
  );
}