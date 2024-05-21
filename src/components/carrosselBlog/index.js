import Link from 'next/link'
import Image from 'next/image'
import styles from './carrosselBlog.module.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { EffectCube, Navigation, Pagination } from 'swiper/modules'

register(); //função para utilizar o swiper

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cube'


export default function CarrosselBlog({ posts, titulo }) {
  
  const arrPosts = [];
  var recents = [];

  for (const i in posts) //pega os dados importantes que estão localizados na posição 0 
  { 
    arrPosts.push(posts[i]); //rearranja os dados em um novo array
    arrPosts[i].data = new Date(arrPosts[i].data) //transforma as datas que estão em formato de string para formato DATE
  }

  function ordemDecrescente(a, b) {
    return b.data - a.data;//função passada por parametro para o ordenamento, se b-a então estará ordenado pelos mais recentes. Se a-b, estará ordenado da data antiga par a mais nova
  }
  posts.sort(ordemDecrescente) //ordena os quatro primeiros por data

  for (let i = 0; i < arrPosts.length; i++) {
    arrPosts[i].data = arrPosts[i].data.toISOString().split('T')[0]; //transforma as datas em formato DATE para string
  }
  for (let i = 0; i < 3; i++) {
    recents.push(posts[i]) //limita o tamanho dos posts para 3
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
            // "--swiper-pagination-bullet-border-radius": "10px",
            // "--swiper-pagination-bullet-width": "10px",
            // "--swiper-pagination-bullet-height": "10px",
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
          }} //permite a troca de páginas pelo pagination
          // effect={'cube'} ativar caso desejem animação
          grabCursor={true}
          className={styles.swiperContainer}
          // modules={[EffectCube, Navigation, Pagination]}
        >
          {recents.map((item) => ( //renderiza um slide para cada item no array de recents
            <SwiperSlide key={item.titulo} className={styles.swiperInd}>
              <Link href={`/posts/${item.fileName}`}>
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