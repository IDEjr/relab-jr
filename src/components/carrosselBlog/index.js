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
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFlip, Pagination, Navigation } from "swiper/modules";



export default function CarrosselBlog(...posts) {  
  const [domLoaded, setDomLoaded] = useState(false);
  const arrPosts = [];
  var recents = [];

  useEffect(() => {
    setDomLoaded(true);
  }, []);



  for(const i in posts[0]){

    arrPosts.push(posts[0] [i]);
    

    arrPosts[i].data = new Date(arrPosts[i].data)

}

  
function ordemDecrescente(a, b) {
  return b.data - a.data;
}
  arrPosts.sort(ordemDecrescente) //ordena os quatro primeiros por data

   for (let i =0; i<arrPosts.length ; i++){
   arrPosts[i].data  =  arrPosts[i].data.toISOString().split('T')[0];      
   }
  
  for (let i = 0; i < 3; i++) {
    recents.push(arrPosts[i])
    
  }
  



  return (
    <>
    
<section className={styles.container}>
{domLoaded && (
       <Swiper
          style={{
            "--swiper-theme-color":"#F2C12E",
            "--swiper-pagination-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-border-radius": "0",
            "--swiper-pagination-bullet-width": "30px",
            "--swiper-pagination-bullet-height": "5px",
            "--swiper-pagination-bullet-horizontal-gap" :" 15px"

          }}

      
        slidesPerView={1}
         effect={'swipe'}   
         pagination={true}
          navigation ={{
            enabled: false
          }
          }
         modules={[EffectFlip, Pagination, Navigation]}
         className={styles.swiperContainer}
         breakpoints={{
          800: {
            navigation: {enabled: true}
            
          }
         }

         } 

      >
        {recents.map((item)=> (
        <SwiperSlide key={item.titulo} className={styles.swiperInd}>
         <div className={styles.carrosselImage}>
          
            <Image src={item.imagemCapa}  fill  alt={item.titulo} style={{objectFit: 'cover', background: 'black', opacity:0.3} }  />
         
           <h1 className={styles.h1}>BLOG</h1>
           <div className={styles.titles}>
            <h3><p className={styles.h3}>{item.genero}</p></h3>                                                                                             
        
            <h2><p className={styles.h2}>{item.titulo}</p></h2>
         
            <h3><p className={styles.h3}>{item.previa}</p></h3> 
         </div> 
         </div>
        </SwiperSlide>))
        }
      </Swiper>
)}
      </section>
      
  
      
    </>
  );
}
