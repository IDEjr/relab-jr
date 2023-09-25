import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import TextoServicos from '../components/textoServicos'
import EscoposServicos from '@/components/escoposServicos'
import styles from '../styles/servicos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import imagemInicioServicos from '../../public/uploads/image/inicio/imagemInicioServicos.jpg'

export default function servicos({imagensInicio}) {

  // pega imagem da home do netlify
  let imagemInicioHome;
  let img = [];

  imagensInicio.map((imagemInicio, i) => {
    img[i] = imagemInicio.imagem
  });

  imagemInicioHome = img[2]


  const path = imagemInicioServicos

  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      <TextoServicos />
      <EscoposServicos />
      <Footer />
    </>
  );
}


export async function getStaticProps() {
  const imagensInicio = handleJSONfiles("./content/imagensInicio");
  return {
    props: { imagensInicio }
  };
}