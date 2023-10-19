import Link from 'next/link'
import Image from 'next/image'
import styles from './CarrosselBlog.module.css'
import CardPosts from '../cardPosts';
import { register } from 'swiper/element/bundle'

register();

import 'swiper/css';
import "swiper/css/effect-flip";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFlip, Pagination, Navigation } from "swiper/modules";



export default function CarrosselBlog(...posts) {

  
  const arrPosts = [];
  for( const i in posts[0]){

    arrPosts.push(posts[0] [i]);
    

    arrPosts[i].data = new Date(arrPosts[i].data)

}

  
function ordemDecrescente(a, b) {
  return a.data - b.data;
}
  arrPosts.sort(ordemDecrescente) //ordena os quatro primeiros por data

   for (let i =0; i<arrPosts.length ; i++){
   arrPosts[i].data  =  arrPosts[i].data.toISOString().split('T')[0];      
   }
  var recents = [];
  for (let i = 0; i < 3; i++) {
    recents.push(arrPosts[i])
    
  }
  



  return (
    <>
<section className={styles.container}>
       <Swiper
          style={{
            "--swiper-theme-color":"#F2C12E",
            "--swiper-pagination-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-border-radius": "0",
            "--swiper-pagination-bullet-width": "40px",
            "--swiper-pagination-bullet-height": "6px",
            "--swiper-pagination-bullet-horizontal-gap" :" 15px"
          }}
        slidesPerView={1}
         effect={'swipe'}   
         grabCursor={true}
         pagination={true}
         navigation={true}
         modules={[EffectFlip, Pagination, Navigation]}
         className={styles.swiperContainer}

      >
        {recents.map((item)=> (
        <SwiperSlide key={item.titulo} className={styles.swiperInd}>
         <div className={styles.carouselImage}>
          
            <Image src={item.imagem}  fill  alt={item.titulo} style={{objectFit: 'cover', background: 'black', opacity:0.6} }  />
          <div className={styles.titles}>
           <h1 className={styles.h1}>BLOG</h1>
           
            <h3><p className={styles.h3}>{item.genero}</p></h3>                                                                                             
        
            <h2><p className={styles.h2}>{item.titulo}</p></h2>
         
            <h3><p className={styles.h3}>{item.previa}</p></h3> 
         </div> 
         </div>
        </SwiperSlide>))
        }
      </Swiper>
      </section>
      
  
      
    </>
  );
}
