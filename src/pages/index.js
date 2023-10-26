import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImagemComBotao from '../components/imagemComBotao'
import ServicesHome from '../components/servicesHome'
import Inicio from '../components/inicio'
import TextoBarraHome from '../components/textoBarraHome/index'
import CarrosselHome from '../components/carrosselHome'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import React from 'react';



export default function Home({home, posts, nav, foo}) {

  // pega imagem da home do netlify
  const path = home.inicioHome.imagem;
 
  // pega dados dos botões do netlify

  const resultados = {
    imagem: home.imgBotaoRes.imagem,
    titulo: home.imgBotaoRes.titulo,
    texto: home.imgBotaoRes.texto,
    textoBotao: 'Entre em contato',
    link: 'servicos'
  };

  const textoBarraHome = {
    texto: home.inicioHome.texto
  }

  const membros = {
    imagem: home.imgBotaoMem.imagem,
    titulo: home.imgBotaoMem.titulo,
    texto: home.imgBotaoMem.texto,
    textoBotao: 'Sejo membro',
    link: 'quemSomos'
  };
  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  };
  console.log(foo);

  return (
    <div className={styles['tudo']}>
      <React.Fragment>
      <Navbar  {...navData}/>
      </React.Fragment>
      
      <Inicio title = {"GESTÃO É A NOSSA CAUSA"} image= {path}/>
      <TextoBarraHome {...textoBarraHome}/>
      <ImagemComBotao {...resultados} />
      <ServicesHome servicosHome = {home.servicosHome}/>

      <ImagemComBotao {...membros} />S
      <CarrosselHome {...posts}/>  
      <Footer {...foo}/>

    </div>
  )
}


export async function getStaticProps(){

  const caminho = "paginas";
  const pagina = "home";
  const caminho2 = "navFooter";
  const pagina2 = "navbar";
  const pagina3 = "footer";
  const home = handleJSONfile(`./content/${caminho}/${pagina}.json`);
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  const foo = handleJSONfile(`./content/${caminho2}/${pagina3}.json`);
  const posts = handleJSONfiles('./content/posts');
  return {
    props: { home, posts, nav, foo },
  };
}