import Image from 'next/image'
import styles from './escoposServicos.module.css'

export default function escoposServicos({imagem1, servico1, texto1, imagem2, servico2, texto2, imagem3, servico3, texto3, imagem4, servico4, texto4, imagem5, servico5, texto5, imagem6, servico6, texto6,}) {
    return(
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.title}>
                    NOSSOS ESCOPOS
                </h2>

                <div className={styles.serviceContainer}>
                    <div className={styles.imagemContainer}>
                        <Image
                            src={imagem1}
                            style={{objectFit: 'cover'}}
                            fill
                        />
                    </div>
                    <div className={styles.textContainer}>
                            <h3 className={styles.titleContainer}>{servico1}</h3>
                            <div className={styles.underBar}></div>
                            <div className={styles.descriptionContainer}>
                                {texto1}
                            </div>
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.textContainer}>
                            <h3 className={styles.titleContainer}>{servico2}</h3>
                            <div className={styles.underBar}></div>
                            <div className={styles.descriptionContainer}>
                                {texto2}
                            </div>
                    </div>
                    <div className={styles.imagemContainer}>
                        <Image
                            src={imagem2}
                            style={{objectFit: 'cover'}}
                            fill
                        />
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.imagemContainer}>
                        <Image
                            src={imagem3}
                            style={{objectFit: 'cover'}}
                            fill
                        />
                    </div>
                    <div className={styles.textContainer}>
                            <h3 className={styles.titleContainer}>{servico3}</h3>
                            <div className={styles.underBar}></div>
                            <div className={styles.descriptionContainer}>
                                {texto3}
                            </div>
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.textContainer}>
                            <h3 className={styles.titleContainer}>{servico4}</h3>
                            <div className={styles.underBar}></div>
                            <div className={styles.descriptionContainer}>
                                {texto4}
                            </div>
                    </div>
                    <div className={styles.imagemContainer}>
                        <Image
                            src={imagem4}
                            style={{objectFit: 'cover'}}
                            fill
                        />
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.imagemContainer}>
                        <Image
                            src={imagem5}
                            style={{objectFit: 'cover'}}
                            fill
                        />
                    </div>
                    <div className={styles.textContainer}>
                            <h3 className={styles.titleContainer}>{servico5}</h3>
                            <div className={styles.underBar}></div>
                            <div className={styles.descriptionContainer}>
                                {texto5}
                            </div>
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.textContainer}>
                            <h3 className={styles.titleContainer}>{servico6}</h3>
                            <div className={styles.underBar}></div>
                            <div className={styles.descriptionContainer}>
                                {texto6}
                            </div>
                    </div>
                    <div className={styles.imagemContainer}>
                        <Image
                            src={imagem6}
                            style={{objectFit: 'cover'}}
                            fill
                        />
                    </div>
                </div>
            </div>
        </>
    )
}