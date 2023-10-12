import styles from '../styles/servicos.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'


export default function servicos({servicos, nav}) {

  const path = servicos.inicioServicos.imagem;
  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  };
  return (
    <>
      <Navbar  {...navData}/>
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      <Footer />
    </>
  );
}


export async function getStaticProps(){

  const caminho = "paginas";
  const pagina = "servicos";
  const caminho2 = "navFooter";
  const pagina2 = "navbar";
  const servicos = handleJSONfile(`./content/${caminho}/${pagina}.json`);
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  return {
    props: { servicos, nav },
  };
}