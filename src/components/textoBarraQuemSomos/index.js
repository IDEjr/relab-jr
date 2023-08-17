import Link from 'next/link'
import styles from './textoBarraQuemSomos.module.css'
import Image from 'next/image'
import image1 from '../../../public/uploads/image/QuemSomos/iconelampada.png'

export default function textoBarraQuemSomos() {
    return(
        <>
            <h1>Quem Somos</h1>
            <h2><Link href='/'>Back to home</Link></h2>
            <div className={styles['toptext']}>
                <p className={styles['text-content']} >
                    Texto explicando um pouco da história da Relab jr e seus valores. 
                    Contando o como começou, com que intuito, quais suas maiores causas.
                </p>  
            </div>
            <div className={styles['main']}>
            <Image src={image1} className={styles['lampada']}/>
            <div className={styles['bottomtext']}>
                <p className={styles['text-content']}>
                    E também falando um pouco melhor sobre as metas gerais e norteadoras da empresa no futuro.
                    Texto meramente ilustrativo.
                </p>
            </div>
            </div>
        </>
    )
}