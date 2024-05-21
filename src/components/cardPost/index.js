import Link from 'next/link'
import Image from 'next/image'
import styles from './cardPost.module.css'

export default function CardPost({ fileName, imagem, titulo, data, previa, autor}) {

  // formata data
  var dataForm;
  dataForm = data.substring(8, 10) + '/' + data.substring(5, 7) + '/' + data.substring(0, 4);

  const url = `/posts/${fileName}`;

  return (
    <>
      <Link href={url} className={styles.link}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.img}>
              <Image
                src={imagem}
                fill
                style={{objectFit: 'cover'}}
                alt="Post"
              />
            </div>
            <div className={styles.dados}>
              <div className={styles.emCima}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <hr className={styles.linha} />
                <p className={styles.previa}>{previa}</p>
              </div>
              <div className={styles.embaixo}>
                <span className={styles.data}>{dataForm}</span>
                <span className={styles.autor}>{autor}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}