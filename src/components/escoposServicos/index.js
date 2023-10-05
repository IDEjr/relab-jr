import styles from './escoposServicos.module.css'

export default function escoposServicos() {
    return(
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.title}>
                    NOSSOS ESCOPOS
                </h2>
                <div className={styles.serviceContainer}>
                    <div className={styles.imagemContainer}></div>
                    <div className={styles.textContainer}>
                            <h3 className={styles.titleContainer}>Modelagem de negócio</h3>
                            <div className={styles.underBar}></div>
                            <div className={styles.descriptionContainer}>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas. Mauris augue purus, faucibus sit amet elit vitae, porta interdum nisl. Proin sed velit sed mauris finibus congue vitae non neque. Maecenas laoreet quam nibh, a bibendum magna suscipit non. Integer mi nisi, volutpat vel magna ac, accumsan interdum massa. Aliquam sed dolor a ligula malesuada fringilla. Ut suscipit dolor sit amet tellus auctor consequat. Maecenas eget elit neque.
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}