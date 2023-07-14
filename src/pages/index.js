import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'


export default function Home({exemplos}) {
  console.log(exemplos)
  return (
    <div className={styles['container']}>
      <Head><title>Template Next Netlify</title></Head>
      <h1 className={styles['header']}>Este é um template de Next - Netlify</h1>
      <p className={styles['subtitle']}>Abra /admin para ver as opções</p>
      <ul className={styles['exemplo-list']}>
        {exemplos && exemplos.map((exemplo,i) => (
          <Link className={styles["link"]} key={i} href={`/exemplos/${exemplo.fileName}`}>
            <div className={styles["card"]}>
                <span >{exemplo.titulo}</span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps(){
  const exemplos = handleJSONfiles("./content/exemplos");
  return {
    props: { exemplos },
  };
}