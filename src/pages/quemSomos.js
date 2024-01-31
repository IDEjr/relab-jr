import Inicio from '../components/inicio'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TextoBarraQuemSomos from '../components/textoBarraQuemSomos'
import Valores from '../components/valores'
import GridMembros from '@/components/gridMembros'
import CarrosselQuemSomos from '@/components/carrosselQuemSomos'
// import styles from '../styles/quemSomos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'

export default function quemSomos({quemSomos, membros, nav, carrosselQuemSomos, foo}) {

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


  const valores = {
    titulo: quemSomos.valores.titulo,
    titulo1: quemSomos.valores.titulo1,
    titulo2: quemSomos.valores.titulo2,
    titulo3: quemSomos.valores.titulo3,
    titulo4: quemSomos.valores.titulo4,
    texto1: quemSomos.valores.texto1,
    texto2: quemSomos.valores.texto2,
    texto3: quemSomos.valores.texto3,
    texto4: quemSomos.valores.texto4,
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
      <Inicio title = {quemSomos.inicioQuemSomos.titulo} image= {path}/>
      <TextoBarraQuemSomos {...textoBarra}/>
      <CarrosselQuemSomos {...quemSomos.CarrosselQuemSomos.imagensCarrossel}/>
      <Valores  {...valores}/>
      <GridMembros   titulo={grid.titulo} logo={grid.logo} membros={membros}/>
      
      <Footer {...foo}/>
    </>
  );
}


export async function getStaticProps(){

  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const quemSomos = handleJSONfile(`./content/paginas/quemSomos.json`);
  const carrosselQuemSomos = handleJSONfiles(`./content/carrosselQuemSomos`);
  const membros = handleJSONfiles(`./content/membros`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);

  return {
    props: { quemSomos, membros, nav, carrosselQuemSomos, foo },
  };
}
