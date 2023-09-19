import styles from './servicesHome.module.css'
import yellowFrame from '../../../public/uploads/image/servicosHome/yellowFrame.png'
import imageOne from '../../../public/uploads//image/servicosHome/inside-image1.png'
import imageTwo from '../../../public/uploads/image/servicosHome/inside-image2.png'
import imageThree from '../../../public/uploads/image/servicosHome/inside-image3.png'
import imageFour from '../../../public/uploads/image/servicosHome/inside-image4.png'
import imageFive from '../../../public/uploads/image/servicosHome/inside-image5.png'
import imageSix from '../../../public/uploads/image/servicosHome/inside-image6.png'
import Image from 'next/image'


function eachService(top_text, image_path) { 
    return(
        <div className={styles['individual-block']}>
            <h3 className={styles['top-text']}>
                {top_text}
            </h3>
            <div className={styles['frames']}>
                <div className={styles['inside-image']} style={image_path}/>
                
            </div>
        </div>
    )
}

export default function servicesHome({imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix}) {
    const imgOne = {
        '--img-one' : `url(${imageOne})` 
    };
    const imgTwo = {
        '--img-two' : `url(${imageTwo})`
    };
    const imgThree = {
        '--img-three' : `url(${imageThree})`
    };
    const imgFour = {
        '--img-four' : `url(${imageFour})`
    };
    const imgFive = {
        '--img-five' : `url(${imageFive})`
    };
    const imgSix = {
        '--img-six' : `url(${imageSix})`
    };
   return(
        <>
            <div className={styles['container']}>
                <h1 className={styles['title-text']}>NOSSOS SERVIÇOS</h1>
                <div className={styles['blocks-handler']}>
                    <div className={styles['first-two']}>
                        {eachService("MODELAGEM DE NEGÓCIOS", imageOne)}
                        {eachService("VIABILIDADE ECONÔMICA", imageTwo)}
                    </div>
                    <div className={styles['second-two']}>
                        {eachService("ANÁLISE DA SAÚDE FINANCEIRA", imageThree)}
                        {eachService("PLANEJAMENTO ESTRATÉGICO", imageFour)}
                    </div>
                    <div className={styles['third-two']}>
                        {eachService("CAPTAÇÃO DE CLENTES", imageFive)}
                        {eachService("GESTÃO DE PESSOAS", imageSix)}
                    </div>
                </div>
            </div>
        </>
    )
}