import Link from 'next/link'
import Image from 'next/image'
import Styles from './carrosselQuemSomos.module.css'
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
export default function CarrosselQuemSomos() {

  
 

  return (
    <>
    <section >
      <h3 >
        NOVIDADES
      </h3>
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
         effect={"flip"}
         grabCursor={true}
         pagination={true}
         navigation={true}
         modules={[EffectFlip, Pagination, Navigation]}
         

      >
       
      </Swiper>
      
      
    </section>
      
    </>
  );
}
