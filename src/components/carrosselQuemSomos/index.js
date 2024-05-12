import Image from 'next/image'
import Styles from './carrosselQuemSomos.module.css'
import { register } from 'swiper/element/bundle'

register(); //função para utilizar o swiper

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function CarrosselQuemSomos({ imagens }) {

  return (
    <>
      <div className={Styles.container}>
        <Swiper
          style={{
            "--swiper-theme-color": "#F2C12E",
            "--swiper-pagination-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-color": "#c19a24  ",   //algumas estilizações do navigation, pagination
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-border-radius": "10px",
            "--swiper-pagination-bullet-width": "10px",
            "--swiper-pagination-bullet-height": "10px",
            "--swiper-pagination-bullet-horizontal-gap": " 5px"
          }}
          slidesPerView={1}  //define a quantidade de slides por visualização
          loop = {true}
          grabCursor={true}  //ativando o grabCursor com configurações default

          pagination={{   //configurações da pagination
              clickable: true,
              dynamicBullets: true   
            }}

          autoplay={{  //configurações do autoplay
            delay: 3000,
            disableOnInteraction: false
          }}
          
          breakpoints={{
            800: {  //acima de 800px, aumenta os slides por visualização para dois, e ativa o navigation (as setinhas)
              slidesPerView: 2,
              navigation: {
                enabled: true  
              }
            }
          }}
        >
          {imagens.map((item) => (     //mostra um slide para cada imagem contida em images
            <SwiperSlide key={item} className={Styles.swiperSlide} >
              <div className={Styles.image}>
                <Image
                  src={item}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt="Post"
                />
              </div>
            </SwiperSlide>))
          } 
        </Swiper> 
      </div>
    </>
  )
}