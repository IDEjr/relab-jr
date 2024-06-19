import styles from './carrosselHome.module.css'
import CardPost from '@/components/cardPost'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register();

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function CarrosselHome({ posts, titulo }) {
  posts.sort((a, b) => new Date(b.data) - new Date(a.data));
  const filteredPosts = posts.slice(0,4);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carrossel}>
          <h2 className={styles.titleSection}>
            {titulo}
          </h2>
          <Swiper
            style = {{
              "--swiper-theme-color":"#F2C12E",
              "--swiper-pagination-color": "#F2C12E",
              "--swiper-pagination-bullet-inactive-color": "#F2C12E",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap" :" 15px"
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
            className={styles.swiperContainer}
          >
            {filteredPosts.map((post)=> (
              <SwiperSlide key={post.titulo} className={styles.swiperIndi}>
                <CardPost
                  imagem={post.imagemCapa}
                  fileName={post.fileName}
                  titulo={post.titulo}
                  data={post.data}
                  previa={post.previa}
                  autor={post.autor}
                />
                <div className={styles.margin}>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}