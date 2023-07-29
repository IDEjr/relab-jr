import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/quemSomos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import Image from 'next/image'

export default function quemSomos({membros}) {
  console.log(membros)
  return (
    <>
      <Navbar />
      <h1>Quem Somos</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <ul className={styles['exemplo-list']}>
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
      <Footer />
    </>
  );
}



export async function getStaticProps(){
  const membros = handleJSONfiles("./content/membros");
  return {
    props: { membros },
  };
}