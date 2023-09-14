import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import styles from '../styles/servicos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'


export default function servicos({pagina}) {

  const path = pagina[3].inicioServicos.imagem;

  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      <Footer />
    </>
  );
}


export async function getStaticProps() {

  const pagina = handleJSONfiles("./content/paginas");

  return {
    props: { pagina }
  };
}