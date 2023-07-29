import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
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
          <ul className={styles['membro-list']}>
            {membros && membros.map((membro,i) => (
              <a target="_blank" href={`${membro.linkedin}`} className={styles["link"]} key={i}>
                <div>
                  <Image
                    src={`${membro.imagem}`}
                    width={500}
                    height={500}
                    alt="Membro"
                  />
                </div>
                <div className={styles["card"]}>
                  <span >{membro.texto}</span>
                </div>
              </a>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  )
}


// {`/membros/${membro.fileName}`}
// src\pages\serviços.js

export async function getStaticProps(){
  const membros = handleJSONfiles("./content/membros");
  return {
    props: { membros },
  };
}