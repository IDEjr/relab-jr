import Link from 'next/link'
import Image from 'next/image'
import styles from './cardMembros.module.css'

export default function cardMembros({ nome, posicao, imagem, linkedin }) {
  return (
    <>
      <Link href={linkedin} target="_blank" className={styles['link']}>
        <div className={styles['container']}>
          <div className={styles['box']}>
            <h3 className={styles['nome']}>{nome}</h3>
            <p className={styles['posicao']}>{posicao}</p>
            <div className={styles['img']}>
              <Image
                src={imagem}
                fill
                cover
                style={{objectFit: 'cover'}}
                // width={500}
                // height={300}
                alt='Foto Membro'
                // className={styles['background']}
                />
              </div>
          </div>
        </div>
      </Link>
    </>
  );
}


// export default function cardMembros({ nome, posicao, imagem, linkedin }) {
//   return (
//     <>
//       <Link href={linkedin} target="_blank">
//         <div className={styles['container']}>
//           <div className={styles['box']}>
//             <h2 className={styles['titulo']}>{nome}</h2>
//             <p className={styles['texto']}>{posicao}</p>
//             <div className={styles['img']}>
//               <Image
//                 src={imagem}
//                 fill
//                 // cover
//                 style={{objectFit: 'cover'}}
//                 // width={500}
//                 // height={300}
//                 alt='Foto Membro'
//                 // className={styles['background']}
//                 />
//               </div>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// }