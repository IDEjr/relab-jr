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


/*Pegue os titulos que estão no json da home, e passar para aqui, e renderizar somente os posts que tem mesmo titulo dos 
selecionados.*/
export default function CarrosselBlog(...posts) {

  
  const arrPosts = [];
  for (let i =0; i<4 ; i++){
    arrPosts.push(posts[0][i]);
    arrPosts[i].data = new Date(arrPosts[i].data)
  }
  
  const compareTime = (time1, time2) =>{
    return time1 - time2
  }
  arrPosts.sort(compareTime) //ordena os quatro primeiros por data

  for (let i =0; i<arrPosts.length ; i++){
  console.log(arrPosts[i].data);
  arrPosts[i].data  =  arrPosts[i].data.toISOString().split('T')[0];      
  }


  return (
    <>

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
        {arrPosts.map((item)=> (
        <SwiperSlide key={item.titulo} className={styles.swiperIndi}>
          <CardPosts {...item}/>
        </SwiperSlide>))
        }
      </Swiper>
       
      
  
      
    </>
  );
}
