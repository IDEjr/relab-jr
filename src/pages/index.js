import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImagemComBotao from '../components/imagemComBotao'
import ServicesHome from '../components/servicesHome'
import Inicio from '../components/inicio'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'


export default function Home({pagina}) {

  // pega imagem da home do netlify
  const path = pagina[1].inicioHome.imagem;

  // pega dados dos botões do netlify

  const resultados = {
    imagem: pagina[1].imgbotaoRes.imagem,
    titulo: pagina[1].imgbotaoRes.titulo,
    texto: pagina[1].imgbotaoRes.texto,
    textoBotao: 'Entre em contato',
    link: 'servicos'
  };

  const membros = {
    imagem: pagina[1].imgbotaoMem.imagem,
    titulo: pagina[1].imgbotaoMem.titulo,
    texto: pagina[1].imgbotaoMem.texto,
    textoBotao: 'Sejo membro',
    link: 'quemSomos'
  };

  return (
    <div className={styles['tudo']}>
      <Navbar />
      <Inicio title = {"GESTÃO É A NOSSA CAUSA"} image= {path}/>
      <ImagemComBotao {...resultados} />
      {/* <ServicesHome /> */}
      <ImagemComBotao {...membros} />        
      {/* <Footer /> */}
    </div>
  )
}


export async function getStaticProps() {

  const pagina = handleJSONfiles("./content/paginas");

  return {
    props: { pagina }
  };
}