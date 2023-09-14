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
import React from 'react';




export default function Home({paginas}) {

  // pega imagem da home do netlify
  const path = paginas[1].inicioHome.imagem;

  // pega dados dos botões do netlify

  const resultados = {
    imagem: paginas[1].imgBotaoRes.imagem,
    titulo: paginas[1].imgBotaoRes.titulo,
    texto: paginas[1].imgBotaoRes.texto,
    textoBotao: 'Entre em contato',
    link: 'servicos'
  };

  const membros = {
    imagem: paginas[1].imgBotaoMem.imagem,
    titulo: paginas[1].imgBotaoMem.titulo,
    texto: paginas[1].imgBotaoMem.texto,
    textoBotao: 'Sejo membro',
    link: 'quemSomos'
  };

  return (
    <div className={styles['tudo']}>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      
      <Inicio title = {"GESTÃO É A NOSSA CAUSA"} image= {path}/>
      <TextoBarraHome/>
      <ImagemComBotao {...resultados} />
      {/* <ServicesHome /> */}
      <ImagemComBotao {...membros} />        
      {/* <Footer /> */}
    </div>
  )
}


export async function getStaticProps() {

  const paginas = handleJSONfiles("./content/paginas");

  return {
    props: { paginas }
  };
}