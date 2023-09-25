import styles from './escoposServicos.module.css'

export default function escoposServicos() {
    return(
        <>
            <div className={styles.mainContainer}>
                <h3 className={styles.title}>
                    NOSSOS ESCOPOS
                </h3>
                <div className={styles.serviceContainer}>
                    <div className={styles.imagemContainer}></div>
                    <h3>Viabilidade Economica</h3>
                </div>
            </div>
        </>
    )
}