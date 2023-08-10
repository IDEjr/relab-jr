import styles from './servicesHome.module.css'
import yellowFrame from '../../../public/uploads/yellowFrame.png'
import image1 from '../../../public/uploads/inside-image1.png'
import image2 from '../../../public/uploads/inside-image2.png'
import image3 from '../../../public/uploads/inside-image3.png'
import image4 from '../../../public/uploads/inside-image4.png'
import image5 from '../../../public/uploads/inside-image5.png'
import image6 from '../../../public/uploads/inside-image6.png'
import Image from 'next/image'


function eachService(top_text, image_path) { 
    return(
        <div className={styles['individual-block']}>
            <h3 className={styles['top-text']}>
                {top_text}
            </h3>
            <div className={styles['frames']}>
                <Image src={image_path} className={styles['inside-image']} ></Image>
            </div>
        </div>
    )
}


function servicesHome() {
    
   return(
        <>
            <div className={styles['container']}>
                <h1 className={styles['title-text']}>NOSSOS SERVIÇOS</h1>
                <div className={styles['upper-part']}>
                    {eachService("MODELAGEM DE NEGÓCIOS", image1)}
                    {eachService("VIABILIDADE ECONÔMICA", image2)}
                    {eachService("ANÁLISE DA SAÚDE FINANCEIRA", image3)}
                </div>
                <div className={styles['lower-part']}>              
                    {eachService("PLANEJAMENTO ESTRATÉGICO", image4)}
                    {eachService("CAPTAÇÃO DE CLENTES", image5)}
                    {eachService("GESTÃO DE PESSOAS", image6)}
                </div>
            </div>
        </>
        
    )
}



export default servicesHome;