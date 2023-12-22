import Link from 'next/link'
import styles from './textoBarraQuemSomos.module.css'
import Image from 'next/image'
import image1 from '../../../public/uploads/image/QuemSomos/iconelampada.png'
import image2 from '../../../public/uploads/image/QuemSomos/empe.png'
import image3 from '../../../public/uploads/image/QuemSomos/sorrisoRelab.png'


export default function textoBarraQuemSomos({texto1, texto2, logo}) {
    return(
        <>
        <div className={styles['container']}>  
          <div className={styles['toptext']}>
                <p className={styles['text-content']} >
                    {texto1}
                </p>  
            </div>
        <div className={styles['retangulo']}></div>
    
        <div className={styles['textImage']}>
            
            <div   className={styles['lampada']}>
                <Image src={logo}   
                
                fill
                style={{objectFit:'cover'}}
                alt="Post"
                // 
                />
            </div>

            <div className={styles['bottomtext']}>

                <p className={styles['text-content']}> {texto2}  </p>


            </div>
        </div>
               </div>
        </>
    )
}