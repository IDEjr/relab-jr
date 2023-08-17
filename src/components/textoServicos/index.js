import styles from './textoServicos.module.css'


export default function textoServicos() {
    return(
        <>
            <div>
                <h3 className={styles.topContainer}>
                    O que podemos fazer pela sua empresa?
                </h3>
                <div className={styles.mainContainer}>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas. Mauris augue purus, faucibus sit amet elit vitae, porta interdum nisl. Proin sed velit sed mauris finibus congue vitae non neque. Maecenas laoreet quam nibh, a bibendum magna suscipit non. Integer mi nisi, volutpat vel magna ac, accumsan interdum massa. Aliquam sed dolor a ligula malesuada fringilla. Ut suscipit dolor sit amet tellus auctor consequat. Maecenas eget elit neque.
                    </p>
                </div>
                <div className={styles.bar}></div>
            </div>
        
        </>
    )
}