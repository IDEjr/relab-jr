import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/quemSomos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import Image from 'next/image'
import Inicio from '@/components/inicio'

export default function quemSomos({membros}) {
  console.log(membros);
  const path = '/../public/images/padrao3.jpg';
  
  return (
    <>
      <Navbar />
      <Inicio title = {"QUEM SOMOS"} image= {path}/>




      <ul className={styles['exemplo-list']}>
        {membros && membros.map((membro,i) => (
          <a target="_blank" href={`${membro.linkedin}`} className={styles["link"]} key={i}>
            <div>
              <Image
                src={`${membro.imagem}`}
                width={400}
                height={400}
                alt="Membro "
              />
            </div>
            <div className={styles["card"]}>
              <p>{membro.conteudo}</p>
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