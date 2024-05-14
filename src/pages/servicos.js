import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Inicio from '@/components/inicio'
import TextoServicos from '@/components/textoServicos'
import EscoposServicos from '@/components/escoposServicos'
import FormularioServicos from '@/components/formularioServicos'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'


export default function Servicos({ paginaServicos, nav, foo, formularios, servicos }) {

  // const navData = {
  //   logo : nav.logo,
  //   linkedin : nav.linkedin,
  //   instagram : nav.instagram,
  //   email : nav.email
  // }

  const tituloServicos = paginaServicos.inicioServicos.titulo;
  const imagemServicos = paginaServicos.inicioServicos.imagem;

  const inicioServicos = {
    titulo: paginaServicos.inicioServicos.texto1,
    texto: paginaServicos.inicioServicos.texto2,
  }

  return (
    <>
      <Navbar {...nav}/>
      <Inicio titulo = {tituloServicos} imagem = {imagemServicos}/>
      <TextoServicos {...inicioServicos}/>
      <EscoposServicos servicos = {servicos}/>
      <FormularioServicos {...formularios}/>
      <Footer {...foo}/>
    </>
  );
}


export async function getStaticProps(){

  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const paginaServicos = handleJSONfile(`./content/paginas/servicos.json`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);
  const formularios = handleJSONfile(`./content/forms/forms.json`);

  const servicos = handleJSONfiles(`./content/servicos`);

  return {
    props: { paginaServicos, nav, foo, formularios, servicos },
  };
}