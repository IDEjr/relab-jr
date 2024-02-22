import Image from 'next/image'
import Styles from './carrosselQuemSomos.module.css'
import { register } from 'swiper/element/bundle'
import { IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

register(); //função para utilizar o swiper
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image  as CarouselImage }  from 'pure-react-carousel'

export default function CarrosselQuemSomos(...images) {
  images = images[0];  //pega os dados do array passado (os dados vem em formato de array, e a posição 0 está com os dados que precisamos)
  var arrImages = [];
  
  for (const i in images) {
    arrImages.push(images[i]); //arranjando os dados em um novo array
  }
  images = arrImages //atribuindo a images
  var arrSize = arrImages.length;
   
      return (
        <>
        <CarouselProvider
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          totalSlides={arrSize}
          infinite={true}
          isPlaying={true}
          interval={5000}
          hasMasterSpinner={true}
          className={Styles.carouselContainer}
        >
          <Slider  className={Styles.slider}>
          {images.map((item) => (   
              //mostra um slide para cada imagem contida em images
            <Slide key={item}  >
               <div className={Styles.swiperSlide}>
                
                <CarouselImage  src={item}  fill style={{ objectFit: 'cover' }} className={Styles.CarouselImage}/>
                
              </div>
              
            </Slide>
            ))
          }
          </Slider>
          <DotGroup className={Styles.DotGroup}/>
                <ButtonBack className={Styles.ButtonBack}><IoIosArrowBack /> </ButtonBack>
                <ButtonNext className={Styles.ButtonNext}><IoIosArrowForward /> </ButtonNext>
        </CarouselProvider>
        </>
      );
    
  }