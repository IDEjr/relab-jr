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


export default function quemSomos({quemSomos}) {
  // console.log(membros);

  const path = quemSomos.inicioQuemSomos.imagem;
  
  return (
    <>
      <Navbar />
      <Inicio title = {"QUEM SOMOS"} image= {path}/>
      <TextoBarraQuemSomos />
      <Valores />
      <ul className={styles['exemplo-list']}>
        {quemSomos.painelMembros.membros && quemSomos.painelMembros.membros.map((membros, i) => (
          <CardMembros
            key={i}
            nome={membros.membro.nome}
            posicao={membros.membro.posicao}
            imagem={membros.membro.imagem}
            linkedin={membros.membro.linkedin}
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
  // const membros = handleJSONfiles("./content/membros");

  return {
    props: { quemSomos },
  };
}