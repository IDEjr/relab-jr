import Link from 'next/link'
import Image from 'next/image'
import styles from './cardPostsHome.module.css'

export default function cardPostsHome({ fileName, imagem, titulo, data, previa, autor}) {

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
            
            <div className={styles.corpoTitulo}>
              <div>
                <h2 className={styles.titulo}>{titulo}</h2>
                <h3 className={styles.subTitulo}>{previa}</h3>
              </div>
              
              <hr className={styles.linha}></hr>
            </div>
            <div className={styles.inicioTexto}>
              <p > Você já parou para pensar na jornada que 
                seus clientes percorrem desde o primeiro contato com sua empresa até 
                se tornarem clientes fiéis? Entender a Jornada do Cliente é crucial para o 
                sucesso de qualquer negócio. Neste post, vamos explorar o que é a Jornada do 
                Cliente, qual o objetivo do mapeamento e as vantagens estratégicas que ele oferece 
                para o crescimento e a sustentabilidade da sua empresa, além de apresentar 
                ferramentas que podem potencializar essa jornada. </p>
            </div>
                
              
            <div className={styles.embaixo}>
              <span className={styles.data}>{dataForm}</span>
              <span className={styles.autor}>{autor}</span>
            </div>
            
          </div>
        </div>
      </Link>
    </>
  );
}