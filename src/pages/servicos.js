import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import styles from '../styles/servicos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'


export default function servicos({paginas}) {

  const path = paginas[3].inicioServicos.imagem;

  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      <Footer />
    </>
  );
}


export async function getStaticProps() {

  const paginas = handleJSONfiles("./content/paginas");

  return {
    props: { paginas }
  };
}