import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import styles from '../styles/servicos.module.css'
import imagemServicos from '../../public/uploads/image/inicio/imagemServicos.jpg'

export default function servicos() {
  const path = imagemServicos

  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      <Footer />
    </>
  );
}