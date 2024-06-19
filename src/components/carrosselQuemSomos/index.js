import Image from 'next/image'
import styles from './carrosselQuemSomos.module.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register();

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
            "--swiper-pagination-bullet-inactive-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": " 15px"
          }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            enabled: true,
            clickable: true,
            dynamicBullets: true
          }}
          grabCursor={true}
          breakpoints={{
            800: {
              slidesPerView: 2,
            }
          }}
        >
          {imagens.map((item) => (
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