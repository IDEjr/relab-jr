import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import styles from '../styles/servicos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'


export default function servicos({servicos}) {

  const path = servicos.inicioServicos.imagem;

  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      {/* <Footer /> */}
    </>
  );
}


// export async function getStaticProps() {

//   const paginas = handleJSONfiles("./content/paginas");

//   return {
//     props: { paginas }
//   };
// }

export async function getStaticProps(){

  const caminho = "paginas";
  const pagina = "servicos";
  const servicos = handleJSONfile(`./content/${caminho}/${pagina}.json`);

  return {
    props: { servicos },
  };
}