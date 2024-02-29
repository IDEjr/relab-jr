import Image from 'next/image'
import Styles from './carrosselQuemSomos.module.css'
import { register } from 'swiper/element/bundle'

register(); //função para utilizar o swiper

import 'swiper/css';
import "swiper/css/effect-flip";    //import das animações
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";


export default function CarrosselQuemSomos({images}) {
  // images = images[0];  //pega os dados do array passado (os dados vem em formato de array, e a posição 0 está com os dados que precisamos)
  // var arrImages = [];
  // for (const i in images) {
  //   arrImages.push(images[i]); //arranjando os dados em um novo array
  // }
  // images = arrImages //atribuindo a images

console.log(`ta aqui ó ${images}`);
  return (
    <>
      <div className={Styles.container}>
        <Swiper
          style={{
            "--swiper-theme-color": "#F2C12E",
            "--swiper-pagination-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-color": "#999999",   //algumas estilizações do navigation, pagination
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-border-radius": "0",
            "--swiper-pagination-bullet-width": "40px",
            "--swiper-pagination-bullet-height": "6px",
            "--swiper-pagination-bullet-horizontal-gap": " 15px"
          }}
          slidesPerView={1}  //define a quantidade de slides por visualização
          loop = {true}
          grabCursor={true}  //ativando o grabCursor com configurações default
         
          //  pagination={{   //configurações da pagination
          //    clickable: true   
          //  }}

          navigation={{  //configurações do navi
            enabled: false
          }}

          autoplay={{  //configurações do autoplay
            delay: 5000,
            disableOnInteraction: false
          }}
  
          breakpoints={{
            800: {  //acima de 800px, aumenta os slides por visualização para dois, e ativa o navigation (as setinhas)
              slidesPerView: 2,
              navigation: {
                enabled: true  
              }}}}
        >

          {images.map((item) => (     //mostra um slide para cada imagem contida em images
            <SwiperSlide key={item} className={Styles.swiperSlide} >
              <div className={Styles.image}>

                <Image src={item} fill style={{ objectFit: 'cover' }} alt="Post" />
              </div>
            </SwiperSlide>))
          } 
        </Swiper> 
      </div>
    </>
  )}
