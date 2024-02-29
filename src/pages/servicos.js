import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import TextoServicos from '../components/textoServicos'
import EscoposServicos from '../components/escoposServicos'
import FormularioServicos from '../components/formularioServicos'
// import styles from '../styles/servicos.module.css'
// import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'


export default function servicos({ servicos, nav, foo, formularios }) {

  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  }

  const tituloServicos = servicos.inicioServicos.titulo;
  const imagemServicos = servicos.inicioServicos.imagem;

  const inicioServicos = {
    titulo: servicos.inicioServicos.texto1,
    texto: servicos.inicioServicos.texto2,
  }

  const blocosServicos = {
    imagem1 : servicos.servicos.imagem1,
    servico1 : servicos.servicos.servico1,
    texto1 : servicos.servicos.texto1,
    imagem2 : servicos.servicos.imagem2,
    servico2 : servicos.servicos.servico2,
    texto2 : servicos.servicos.texto2,
    imagem3 : servicos.servicos.imagem3,
    servico3 : servicos.servicos.servico3,
    texto3 : servicos.servicos.texto3,
    imagem4 : servicos.servicos.imagem4,
    servico4 : servicos.servicos.servico4,
    texto4 : servicos.servicos.texto4,
    imagem5 : servicos.servicos.imagem5,
    servico5 : servicos.servicos.servico5,
    texto5 : servicos.servicos.texto5,
    imagem6 : servicos.servicos.imagem6,
    servico6 : servicos.servicos.servico6,
    texto6 : servicos.servicos.texto6,
  }

  return (
    <>
      <Navbar {...navData}/>
      <Inicio titulo = {tituloServicos} imagem = {imagemServicos}/>
      <TextoServicos {...inicioServicos}/>
      <EscoposServicos {...blocosServicos}/>
      <FormularioServicos {...formularios}/>
      <Footer {...foo}/>
    </>
  );
}


export async function getStaticProps(){

  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const servicos = handleJSONfile(`./content/paginas/servicos.json`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);
  const formularios = handleJSONfile(`./content/forms/forms.json`);

  return {
    props: { servicos, nav, foo, formularios },
  };
}