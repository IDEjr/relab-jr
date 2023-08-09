import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImagemComBotao from '../components/imagemComBotao'
import imagem_resultados from '../images/imagem_resultados.png'


export default function Home() {
  const featuredProps = {
    imagem: imagem_resultados,
    titulo: 'MELHORE SEUS RESULTADOS',
    texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas.',
    texto_botao: 'Entre em contato'
  };
  return (
    <>
      <div className={styles['tudo']}>
        <Navbar />
        <div className={styles['container']}>
          <Head><title>Exemplo Next + Netlify</title></Head>
          <h1 className={styles['header']}>Exemplo</h1>
          <p className={styles['subtitle']}>Abra /admin para acessar configurações netlify</p>
        </div>
        <ImagemComBotao {...featuredProps} />
        <Footer />
      </div>
    </>
  )
}