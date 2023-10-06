import styles from './textoServicos.module.css'


export default function textoServicos({titulo, texto}) {
    return(
        <>
            <div>
                <h3 className={styles.topContainer}>
                    {titulo}
                </h3>
                <div className={styles.mainContainer}>
                    <div className={styles.centerContainer}>
                        {texto}
                    </div>
                </div>
                <div className={styles.bar}></div>
            </div>
        
        </>
    )
}