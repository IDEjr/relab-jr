import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import styles from '../styles/servicos.module.css'
import imagemInicioServicos from '../../public/uploads/image/inicio/imagemInicioServicos.jpg'

export default function servicos() {
  const path = imagemInicioServicos

  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      <Footer />
    </>
  );
}