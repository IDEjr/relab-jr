import Link from 'next/link'
import Image from 'next/image'
import styles from './carrosselBlog.module.css'
import CardPosts from '../cardPosts';
import { register } from 'swiper/element/bundle'
import { useState, useEffect } from 'react';
register();

import 'swiper/css';
import "swiper/css/effect-flip";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react'
import next from 'next';



export default function CarrosselBlog(...posts) {

  const [domLoaded, setDomLoaded] = useState(false);
  const arrPosts = [];
  var recents = [];

  useEffect(() => {
    setDomLoaded(true); // código implementado pra resolver um problema do react, como o react "cria" a página duas vezes, ele estava criando uma página com os posts fora de ordem
                        //e a outra com os posts ordenado, causando erro
  }, []);



  for (const i in posts[0]) //pega os dados importantes que estão localizados na posição 0 
    {  
    arrPosts.push(posts[0][i]); //rearranja os dados em um novo array
    arrPosts[i].data = new Date(arrPosts[i].data) //transforma as datas que estão em formato de string para formato DATE
    }


  function ordemDecrescente(a, b) {
    return b.data - a.data;  //função passada por parametro para o ordenamento, se b-a então estará ordenado pelos mais recentes. Se a-b, estará ordenado da data antiga par a mais nova
  }

  arrPosts.sort(ordemDecrescente) //ordena os quatro primeiros por data

  for (let i = 0; i < arrPosts.length; i++) {
    arrPosts[i].data = arrPosts[i].data.toISOString().split('T')[0]; //transforma as datas em formato DATE para string
  }

  for (let i = 0; i < 3; i++) {
    recents.push(arrPosts[i])  //limita o tamanho dos posts para 3
  }

  
  return (
    <>

      <section className={styles.container}>
        {domLoaded && ( //só renderiza quando o react fazer a segunda renderização da página
          <Swiper
            style={{
              "--swiper-theme-color": "#F2C12E",
              "--swiper-pagination-color": "#F2C12E",
              "--swiper-pagination-bullet-inactive-color": "#F2C12E",
              "--swiper-pagination-bullet-inactive-opacity": "0.2",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-border-radius": "0",
              "--swiper-pagination-bullet-width": "30px",   
              "--swiper-pagination-bullet-height": "5px",
              "--swiper-pagination-bullet-horizontal-gap": " 15px"
            }}
            loop ={true}
            slidesPerView={1}
            effect={'swipe'}
            pagination={{ clickable: next }} //permite a troca de páginas pelo pagination
            navigation={{  enabled: false}}
            slidesPerGroup={1}
            autoplay={{  delay: 5000, disableOnInteraction: false  }}
            className={styles.swiperContainer}
            breakpoints={{ 800: {  navigation: { enabled: true }  }}}  //se a tela for maior que 800 pixels, ativa o navigation(as setinhas)
          > 
            {recents.map((item) =>  ( //renderiza um slide para cada item no array de recents
              
              <SwiperSlide key={item.titulo} className={styles.swiperInd}>
                
                  <Link href={`/posts/${item.fileName}`}>
                <div className={styles.carrosselImage}>
                 
                  <Image src={item.imagemCapa} fill alt={item.titulo} className={styles.imagemCarrossel} />
                  <h1 className={styles.h1}>BLOG</h1>
                  
                  <div className={styles.titles}>
                    <h3> <p className={styles.h3}>{item.genero} </p></h3>
                    <h2> <p className={styles.h2}>{item.titulo} </p></h2>
                    <h3> <p className={styles.h3}>{item.previa} </p></h3>
                  </div>

                </div>
                </Link>
              </SwiperSlide>))
            }
          </Swiper>
        )}
      </section>
    </>
  );
}
