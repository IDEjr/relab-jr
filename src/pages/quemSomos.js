import Link from 'next/link'
import Image from 'next/image'
import Inicio from '../components/inicio'
import Navbar from '../components/navbar'
import CardMembros from '../components/cardMembros'
import Footer from '../components/footer'
import TextoBarraQuemSomos from '../components/textoBarraQuemSomos'
import Valores from '../components/valores'
import styles from '../styles/quemSomos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'


export default function quemSomos({quemSomos, membros}) {

  const path = quemSomos.inicioQuemSomos.imagem;
  
  return (
    <>
      <Navbar />
      <Inicio title = {"QUEM SOMOS"} image= {path}/>
      <TextoBarraQuemSomos />
      <Valores />
      <ul className={styles['exemplo-list']}>
        {membros && membros.map((membro, i) => (
          <CardMembros
            key={i}
            nome={membro.nome}
            posicao={membro.posicao}
            imagem={membro.imagem}
            linkedin={membro.linkedin}
          />
        ))}
      </ul>
      {/* <Footer /> */}
    </>
  );
}



export async function getStaticProps(){

  const caminho = "paginas";
  const pagina = "quemSomos";
  const quemSomos = handleJSONfile(`./content/${caminho}/${pagina}.json`);

  const pasta = "membros"
  const membros = handleJSONfiles(`./content/${pasta}`);

  return {
    props: { quemSomos, membros },
  };
}