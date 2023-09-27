import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImagemComBotao from '../components/imagemComBotao'
import ServicesHome from '../components/servicesHome'
import Inicio from '../components/inicio'
import TextoBarraHome from '../components/textoBarraHome/index'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import React from 'react';




export default function Home({home}) {

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

  return (
    <div className={styles['tudo']}>
      <React.Fragment>
      <Navbar />
      </React.Fragment>
      
      <Inicio title = {"GESTÃO É A NOSSA CAUSA"} image= {path}/>
      <TextoBarraHome {...textoBarraHome}/>
      <ImagemComBotao {...resultados} />
      <ServicesHome />
      <ImagemComBotao {...membros} />        
      <Footer /> 
    </div>
  )
}


export async function getStaticProps(){

  const caminho = "paginas";
  const pagina = "home";
  const home = handleJSONfile(`./content/${caminho}/${pagina}.json`);

  return {
    props: { home },
  };
}