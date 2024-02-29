import styles from './textoBarraHome.module.css'

export default function TextoBarraHome({texto}) {
    return(
        <>
        <div className={styles.container}> 
            <div className={styles.retangulo}></div> 
            <div className={styles.text}>
                <p className={styles.textContent}>
                    {texto}
                </p>  
            </div>
        </div>
        </>
    )
}