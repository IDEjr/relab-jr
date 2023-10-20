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
import GridMembros from '@/components/gridMembros'
import CarrosselQuemSomos from '@/components/CarrosselQuemSomos'

export default function quemSomos({quemSomos, membros, nav, carouselQuemSomos}) {
console.log(carouselQuemSomos[0].titulo);
  const path = quemSomos.inicioQuemSomos.imagem;
  const grid = {
    titulo :quemSomos.painelMembros.titulo,
    logo: quemSomos.painelMembros.logo
  }

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
       <CarrosselQuemSomos {...carouselQuemSomos}/>
      <Valores />
      <GridMembros   titulo={grid.titulo} logo={grid.logo} membros={membros}/>
      
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
  const carouselQuemSomos = handleJSONfiles(`./content/carrosselQuemSomos`)
  const pasta = "membros";
  const membros = handleJSONfiles(`./content/${pasta}`);
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  return {
    props: { quemSomos, membros, nav, carouselQuemSomos },
  };
}
