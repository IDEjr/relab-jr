import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer/footer'
import Image from 'next/image'


export default function Home({membros}) {
  console.log(membros)
  return (
    <>
      <div className={styles['tudo']}>
        <Navbar />
        <div className={styles['container']}>
          <Head><title>Exemplo Next + Netlify</title></Head>
          <h1 className={styles['header']}>Exemplo</h1>
          <p className={styles['subtitle']}>Abra /admin para acessar configurações netlify</p>
        </div>
        <Footer />
      </div>
    </>
  )
}