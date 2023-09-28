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


export default function quemSomos({quemSomos, membros, nav}) {

  const path = quemSomos.inicioQuemSomos.imagem;
 
  const textoBarra = {
    texto1: quemSomos.inicioQuemSomos.texto1,
    texto2:  quemSomos.inicioQuemSomos.texto2,
    logo:  quemSomos.inicioQuemSomos.logo
  }

  
  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  };
  return (
    <>
      <Navbar  {...navData}/>
      <Inicio title = {"QUEM SOMOS"} image= {path}/>
      <TextoBarraQuemSomos {...textoBarra}/>
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
      <Footer />
    </>
  );
}


export async function getStaticProps(){

  const caminho = "paginas";
  const pagina = "quemSomos";
  const caminho2 = "navFooter";
  const pagina2 = "navbar";
  const quemSomos = handleJSONfile(`./content/${caminho}/${pagina}.json`);

  const pasta = "membros";
  const membros = handleJSONfiles(`./content/${pasta}`);
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  return {
    props: { quemSomos, membros, nav },
  };
}
