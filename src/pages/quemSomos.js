import Link from 'next/link'
import Image from 'next/image'
import Inicio from '../components/inicio'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TextoBarraQuemSomos from '../components/textoBarraQuemSomos'
import styles from '../styles/quemSomos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import imagemInicioQuemSomos from '../../public/uploads/image/inicio/imagemInicioQuemSomos.jpg'


export default function quemSomos({membros, imagensInicio}) {
  console.log(membros);

  // pega imagem da home do netlify
  let imagemInicioHome;
  let img = [];

  imagensInicio.map((imagemInicio, i) => {
    img[i] = imagemInicio.imagem
  });

  imagemInicioHome = img[1]


  const path = imagemInicioQuemSomos
  return (
    <>
      <Navbar />
      <Inicio title = {"QUEM SOMOS"} image= {path}/>
      <TextoBarraQuemSomos />
      <ul className={styles['exemplo-list']}>
        {membros && membros.map((membro, i) => (
          <Link target="_blank" href={`${membro.linkedin}`} className={styles["link"]} key={i}>
            <div className={styles["card"]}>
              <p>{membro.nome}</p>
              <p>{membro.posicao}</p>
            </div>
            <div>
              <Image
                src={`${membro.imagem}`}
                width={400}
                height={400}
                alt="Membro"
              />
            </div>
          </Link>
        ))}
      </ul>
      <Footer />
    </>
  );
}



{/* <ul className={styles['exemplo-list']}>
  {membros && membros.map((membro, i) => (
    <a target="_blank" href={`${membro.linkedin}`} className={styles["link"]} key={i}>
      <div>
        <Image
          src={`${membro.imagem}`}
          width={400}
          height={400}
          alt="Membro "
        />
      </div>
      <div className={styles["card"]}>
        <p>{membro.conteudo}</p>
      </div>
    </a>
  ))}
</ul> */}




export async function getStaticProps() {

  const membros = handleJSONfiles("./content/membros");
  const imagensInicio = handleJSONfiles("./content/imagensInicio");
  return {
    props: { membros, imagensInicio },
  };
}