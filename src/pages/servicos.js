import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '../components/inicio'
import styles from '../styles/servicos.module.css'


export default function servicos() {
  const path = '/../public/images/padrao4.jpg';

  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      <Footer />
    </>
  );
}