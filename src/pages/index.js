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
import React from 'react';
// import imagemResultados from '../../public/uploads/image/imagemComBotao/imagemResultados.png'
// import imagemMembros from '../../public/uploads/image/imagemComBotao/imagemMembros.png'
// import imagemInicioHome from '../../public/uploads/image/inicio/imagemInicioHome.jpg'


export default function Home({imagensComBotao, imagensInicio}) {
  console.log(imagensComBotao);
  console.log(imagensInicio);
  
  // pega imagem da home do netlify
  let imagemInicioHome;
  let img = [];

  imagensInicio.map((imagemInicio, i) => {
    img[i] = imagemInicio.imagem
  });
  
  imagemInicioHome = img[0]


  // pega imagem dos botões do netlify
  let imagemResultados;
  let imagemMembros;

  imagensComBotao.map((imagemComBotao, i) => {
    img[i] = imagemComBotao.imagem
  });

  imagemResultados = img[1]
  imagemMembros = img[0]


  const resultados = {
    imagem: imagemResultados,
    titulo: 'MELHORE SEUS RESULTADOS',
    texto: 'Potencialize seu negócio com soluções inovadoras da Relab Jr. Consultoria. Desbloqueie oportunidades, supere desafios e alcance novos horizontes. Descubra nossos serviços e comece sua jornada para o sucesso agora!',
    textoBotao: 'Entre em contato',
    link: 'servicos'
  };

  const membros = {
    imagem: imagemMembros,
    titulo: 'MEMBROS',
    texto: 'Faça parte da nossa equipe e amplie seu conhecimento em consultoria empresarial. Na Relab Jr., você se prepara para um futuro de excelência profissional. Junte-se a nós e trilhe um caminho de aprendizado e realizações.',
    textoBotao: 'Sejo membro',
    link: 'quemSomos'
  };

  const path = imagemInicioHome

  return (
    <div className={styles['tudo']}>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      
      <Inicio title = {"GESTÃO É A NOSSA CAUSA"} image= {path}/>
      <ImagemComBotao {...resultados} />
      {/* <ServicesHome /> */}
      <ImagemComBotao {...membros} />        
      {/* <Footer /> */}
    </div>
  )
}


export async function getStaticProps() {

  const imagensComBotao = handleJSONfiles("./content/imagensComBotao");
  const imagensInicio = handleJSONfiles("./content/imagensInicio");
  return {
    props: { imagensComBotao, imagensInicio }
  };
}