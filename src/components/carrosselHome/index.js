import CardPost from '@/components/cardPost'
import styles from './carrosselHome.module.css'
import { register } from 'swiper/element/bundle'

register();

import 'swiper/css';
import "swiper/css/effect-flip";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from "swiper/modules";


/*Pegue os titulos que estão no json da home, e passar para aqui, e renderizar somente os posts que tem mesmo titulo dos 
selecionados.*/
export default function CarrosselHome({posts, titulo}) {
//So passar os props como o objeto e eles sao desmembrados dentro do componente, esse é o jeito certo de usar.

//Pega os ultimos 4 posts 
posts.sort((a, b) => new Date(b.data) - new Date(a.data));
const filteredPosts = posts.slice(0,4);
console.log(filteredPosts)

  return (
    <>
      <section className={styles.carrossel}>
        <h2 className={styles.titleSection}>
          {titulo}
        </h2>
        <Swiper
          style = {{
            "--swiper-theme-color":"#F2C12E",
            "--swiper-pagination-color": "#F2C12E",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-border-radius": "0",
            "--swiper-pagination-bullet-width": "40px",
            "--swiper-pagination-bullet-height": "6px",
            "--swiper-pagination-bullet-horizontal-gap" :" 15px",
            "--swiper-navigation-gap" : "100px"
          }}
          autoplay = {{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules = {[Autoplay]}
          grabCursor = {true}
          pagination = {{
            enabled: false
          }}
          navigation = {{  //configurações do navi
            enabled: false
          }}
          breakpoints={{
            1281: {  //acima de 1281px, ativa o navigation (as setinhas) e o pagination (as bolinhas)
              navigation: {
                enabled: true  
              }
            },
            767: {  //acima de 1281px, ativa o navigation (as setinhas) e o pagination (as bolinhas)
              pagination: {
                enabled: true
              }
            }
          }}
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
      </section>
    </>
  );
}