import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import Header from '../components/navbar';


export default function Home({membros}) {
  console.log(membros)
  return (
    <>
      <navbar />
      <div className={styles['container']}>
        <Head><title>Template Next Netlify</title></Head>
        <h1 className={styles['header']}>Este é um template de Next - Netlify</h1>
        <p className={styles['subtitle']}>Abra /admin para ver as opções</p>
        <ul className={styles['membro-list']}>
          {membros && membros.map((membro,i) => (
            <Link href="/serviços.js" className={styles["link"]} key={i}>
              <div className={styles["card"]}>
                  <span >{membro.texto}</span>
              </div>
            </Link>
          ))}
        </ul>
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