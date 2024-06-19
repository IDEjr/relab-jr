import Link from 'next/link'
import Image from 'next/image'
import styles from './carrosselBlog.module.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register();

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function CarrosselBlog({ posts, titulo }) {
  
  const arrPosts = [];
  var recents = [];

  for (const i in posts)
  { 
    arrPosts.push(posts[i]);
    arrPosts[i].data = new Date(arrPosts[i].data)
  }

  function ordemDecrescente(a, b) {
    return b.data - a.data;
  }
  posts.sort(ordemDecrescente)

  for (let i = 0; i < arrPosts.length; i++) {
    arrPosts[i].data = arrPosts[i].data.toISOString().split('T')[0];
  }
  for (let i = 0; i < 3; i++) {
    recents.push(posts[i])
  }

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
          className={styles.swiperContainer}
        >
          {recents.map((item) => (
            <SwiperSlide key={item.titulo} className={styles.swiperInd}>
              <Link href={`/post/${item.fileName}`}>
                <div className={styles.carrosselImage}>
                  <Image
                    src={item.imagemCapa}
                    fill
                    alt={item.titulo}
                    className={styles.imagemCarrossel}
                  />
                  <h1 className={styles.titulo}>{titulo}</h1>
                  <div className={styles.text}>
                    <h3 className={styles.generoPrevia}>{item.genero}</h3>
                    <h2 className={styles.tituloPost}>{item.titulo}</h2>
                    <h3 className={styles.generoPrevia}>{item.previa}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}