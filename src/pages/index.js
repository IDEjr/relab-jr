import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ImagemComBotao from '@/components/imagemComBotao'
import ServicosHome from '@/components/servicosHome'
import Inicio from '@/components/inicio'
import TextoBarraHome from '@/components/textoBarraHome/index'
import CarrosselHome from '@/components/carrosselHome'
import { handleJSONfiles } from '@/utils/jsonHandler'
import { handleJSONfile } from '@/utils/jsonHandler'
import React from 'react'


export default function Home({ home, posts, nav, foo, servicos, contato }) {

  const tituloHome = home.inicioHome.titulo;
  const imagemHome = home.inicioHome.imagem;

  const textoBarraHome = {
    texto: home.inicioHome.texto
  }

  const imgButResultados = {
    imagem: home.imgBotaoRes.imagem,
    titulo: home.imgBotaoRes.titulo,
    texto: home.imgBotaoRes.texto,
    textoBotao: home.imgBotaoRes.textoBotao,
    link: '/servicos/#formServicos'
  }

  const imgButMembros = {
    imagem: home.imgBotaoMem.imagem,
    titulo: home.imgBotaoMem.titulo,
    texto: home.imgBotaoMem.texto,
    textoBotao: home.imgBotaoMem.textoBotao,
    link: '/quemSomos/#formQuemSomos'
  }

  const tituloCarrossel = home.carrosselHome.tituloCarrossel;

  return (
    <>
      <React.Fragment>
      <Navbar contato = {contato} nav = {nav}/>
      </React.Fragment>
      <Inicio titulo = {tituloHome} imagem = {imagemHome}/>
      <TextoBarraHome {...textoBarraHome}/>
      <ImagemComBotao {...imgButResultados} />
      <ServicosHome titulo = {home.servicosHome.tituloServicos} servicos = {servicos}/>
      <ImagemComBotao {...imgButMembros} />
      <CarrosselHome posts = {posts} titulo = {tituloCarrossel} />
      <Footer contato = {contato} footer = {foo}/>
    </>
  )
}


export async function getStaticProps() {

  const home = handleJSONfile(`./content/paginas/home.json`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);
  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const posts = handleJSONfiles('./content/posts');
  const servicos = handleJSONfiles('./content/servicos');
  const contato = handleJSONfile(`./content/contato/contato.json`);
  
  return {
    props: { home, posts, nav, foo, servicos, contato },
  };
}