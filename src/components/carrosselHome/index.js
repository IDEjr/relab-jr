import styles from './carrosselHome.module.css'
import CardPosts from '../cardPosts'
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


//-------------------------------------------------------------------------------------------
//Pega os ultimos 4 posts 
// console.log(posts)
// let i = 0;
posts.sort((a, b) => new Date(b.data) - new Date(a.data));
// console.log(posts)
const filteredPosts = posts.slice(0,4);
console.log(filteredPosts)

//------------------------------------------------------------------------------------------

  // let posts = props.posts
  // console.log(posts)
  // const data = [];
  // let i = 0;
  // for(let i in posts){
  //   data.push(posts[i]);
  // }

  return (
    <>
      <section className={styles.carrossel}>
        <h3 className={styles.titleSection}>
          {titulo}
        </h3>
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
              <CardPosts 
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