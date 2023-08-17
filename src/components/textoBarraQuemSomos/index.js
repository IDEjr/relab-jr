import Link from 'next/link'
import styles from './textoBarraQuemSomos.module.css'
import Image from 'next/image'
import image1 from '../../../public/uploads/image/QuemSomos/iconelampada.png'
import image2 from '../../../public/uploads/image/QuemSomos/empe.png'
import image3 from '../../../public/uploads/image/QuemSomos/sorrisoRelab.png'


export default function textoBarraQuemSomos() {
    return(
        <>
        <div className={styles['container']}>  
          <div className={styles['toptext']}>
                <p className={styles['text-content']} >
                A RELAB Jr. Consultoria, empresa júnior da Unisinos, teve sua fundação em setembro de 2021, e 
                hoje é federada junto à Federação das Empresas Juniores do Rio Grande do Sul - FEJERS.
                </p>  
            </div>
        <div className={styles['retangulo']}></div>
        
        <div className={styles['textImage']}>
            <Image src={image1} className={styles['lampada']}/>
            <div className={styles['bottomtext']}>
                <p className={styles['text-content']}>
                Nosso objetivo é  nos tornarmos  a empresa júnior referência na região metropolitana de Porto Alegre para micro e pequenas 
                empresas nos principais setores de gestão empresarial, trazendo a inovação e a assertividade.
                </p>
            </div>
        </div>
        <div className={styles['imagebox']}>
         <Image src={image2} className={styles['ImageBoxContent']}/>                            {/* procurar ambas imagens com resolução melhor */}
        <Image src={image3} className={styles['hiddenImage']}/>
        </div>
        </div>
        </>
    )
}