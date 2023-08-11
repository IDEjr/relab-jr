
import Link from 'next/link'
import Image from 'next/image'
import Inicio from '../components/inicio'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TextoBarraQuemSomos from '../components/textoBarraQuemSomos'
import styles from '../styles/quemSomos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import imagemQuemSomos from '../../public/uploads/image/inicio/imagemQuemSomos.jpg'


export default function quemSomos({ membros }) {
  const path = imagemQuemSomos
  return (
    <>
      <Navbar />
      <Inicio title = {"QUEM SOMOS"} image= {path}/>
      <TextoBarraQuemSomos />
      <ul className={styles['exemplo-list']}>
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
      </ul>
      <Footer />
    </>
  );
}


export async function getStaticProps() {

  const membros = handleJSONfiles("./content/membros");
  return {
    props: { membros },
  };
}