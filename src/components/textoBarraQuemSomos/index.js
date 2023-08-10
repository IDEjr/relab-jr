import styles from './textoBarraQuemSomos.module.css'
import Link from 'next/link'


export default () => (
    <>
        <h1>Quem Somos</h1>
        <h2><Link href='/'>Back to home</Link></h2>
        <div className={styles['toptext']}>
            <p className={styles['text-content']} >
                Texto explicando um pouco da história da Relab jr e seus valores. 
                Contando o como começou, com que intuito, quais suas maiores causas.
            </p>  
        </div>
        <div className={styles['bottomtext']}>
            <p className={styles['text-content']}>
                E também falando um pouco melhor sobre as metas gerais e norteadoras da empresa no futuro.
                Texto meramente ilustrativo.
            </p>
        </div>
    </>
);