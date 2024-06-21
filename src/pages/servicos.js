import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Inicio from '@/components/inicio'
import TextoServicos from '@/components/textoServicos'
import EscoposServicos from '@/components/escoposServicos'
import FormularioServicos from '@/components/formularioServicos'
import { handleJSONfile } from '@/utils/jsonHandler'
import { handleJSONfiles } from '@/utils/jsonHandler'


export default function Servicos({ paginaServicos, nav, foo, formularios, servicos, contato }) {

  const tituloServicos = paginaServicos.inicioServicos.titulo;
  const imagemServicos = paginaServicos.inicioServicos.imagem;

  const tituloEscoposServicos = paginaServicos.escoposServicos.titulo;

  const inicioServicos = {
    titulo: paginaServicos.inicioServicos.texto1,
    texto: paginaServicos.inicioServicos.texto2,
  }

  return (
    <>
      <Navbar contato = {contato} nav = {nav}/>
      <Inicio titulo = {tituloServicos} imagem = {imagemServicos}/>
      <TextoServicos {...inicioServicos}/>
      <EscoposServicos titulo = {tituloEscoposServicos} servicos = {servicos}/>
      <FormularioServicos contato = {contato} forms = {formularios}/>
      <Footer contato = {contato} footer = {foo}/>
    </>
  );
}


export async function getStaticProps() {

  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const paginaServicos = handleJSONfile(`./content/paginas/servicos.json`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);
  const formularios = handleJSONfile(`./content/forms/forms.json`);
  const contato = handleJSONfile(`./content/contato/contato.json`);
  const servicos = handleJSONfiles(`./content/servicos`);

  return {
    props: { paginaServicos, nav, foo, formularios, servicos, contato },
  };
}