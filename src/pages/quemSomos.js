import Inicio from '@/components/inicio'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import TextoBarraQuemSomos from '@/components/textoBarraQuemSomos'
import Valores from '@/components/valores'
import GridMembros from '@/components/gridMembros'
import CarrosselQuemSomos from '@/components/carrosselQuemSomos'
import FormularioQuemSomos from '@/components/formularioQuemSomos'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'

export default function QuemSomos({ quemSomos, membros, nav, foo, formularios, contato }) {

  // const navData = {
  //   logo: nav.logo,
  //   linkedin: nav.linkedin,
  //   instagram: nav.instagram,
  //   email: nav.email
  // }

  const tituloQuemSomos = quemSomos.inicioQuemSomos.titulo;
  const imagemQuemSomos = quemSomos.inicioQuemSomos.imagem;

  const textoBarra = {
    texto1: quemSomos.inicioQuemSomos.texto1,
    texto2: quemSomos.inicioQuemSomos.texto2,
    logo: quemSomos.inicioQuemSomos.logo
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

  const grid = {
    titulo: quemSomos.painelMembros.titulo,
    logo: quemSomos.painelMembros.logo
  }

  return (
    <>
      <Navbar contato = {contato} nav = {nav}/>
      <Inicio titulo = {tituloQuemSomos} imagem = {imagemQuemSomos}/>
      <TextoBarraQuemSomos {...textoBarra}/>
      <CarrosselQuemSomos imagens = {quemSomos.carrosselQuemSomos.imagensCarrossel}/>
      <Valores {...valores}/>
      <GridMembros titulo = {grid.titulo} logo = {grid.logo} membros = {membros}/>
      <FormularioQuemSomos contato = {contato} forms = {formularios}/>
      <Footer contato = {contato} footer = {foo}/>
    </>
  );
}


export async function getStaticProps() {

  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const quemSomos = handleJSONfile(`./content/paginas/quemSomos.json`);
  const membros = handleJSONfiles(`./content/membros`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);
  const formularios = handleJSONfile(`./content/forms/forms.json`);
  const contato = handleJSONfile(`./content/contato/contato.json`);

  return {
    props: { quemSomos, membros, nav, foo, formularios, contato },
  };
}