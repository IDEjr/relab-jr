import Image from 'next/image'
import styles from './carrosselQuemSomos.module.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register(); //função para utilizar o swiper

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function CarrosselQuemSomos({ imagens }) {

  return (
    <>
      <div className={styles.container}>
        <Swiper
          style={{
            "--swiper-theme-color": "#F2C12E",
            "--swiper-pagination-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-color": "#c19a24  ",   //algumas estilizações do navigation, pagination
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-border-radius": "10px",
            "--swiper-pagination-bullet-width": "10px",
            "--swiper-pagination-bullet-height": "10px",
            "--swiper-pagination-bullet-horizontal-gap": " 5px"
          }}
          slidesPerView={1}  //define a quantidade de slides por visualização
          loop={true}
          autoplay={{  //configurações do autoplay
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{   //configurações da pagination
            enabled: true,
            clickable: true,
            dynamicBullets: true
          }}
          grabCursor={true}  //ativando o grabCursor com configurações default
          navigation={{  //configurações do navi
            enabled: false
          }}

          breakpoints={{
            800: {  //acima de 800px, aumenta os slides por visualização para dois, e ativa o navigation (as setinhas)
              slidesPerView: 2,
              // navigation: {
              //   enabled: true  
              // }
            }
          }}
        >
          {imagens.map((item) => (     //mostra um slide para cada imagem contida em images
            <SwiperSlide key={item} className={styles.swiperSlide} >
              <div className={styles.image}>
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