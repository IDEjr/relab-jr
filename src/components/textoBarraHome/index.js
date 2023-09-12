import styles from './textoBarraHome.module.css'
export default function TextoBarraHome() {
    return(
        <>
        <div className={styles['container']}> 
        <div className={styles['retangulo']}></div> 
          <div className={styles['text']}>
                <p className={styles['text-content']} >
                “lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at r
                honcus dolor consectetur euismod. Aliquam scelerisque finibus egestas. M
                auris augue purus, faucibus sit amet elit vitae, porta interdum nisl
                . Proin sed velit sed mauris finibus congue vitae non neque. Maecenas laoreet quam nibh
                , a bibendum magna suscipit non. Integer
                 mi nisi, volutpat vel magna ac, accumsan interdum massa. Aliquam sed dolor a ligula malesuada fringilla.
                 Ut suscipit dolor sit amet tellus auctor consequat. Maecenas eget elit neque.”
                </p>  
            </div>
        </div>
        </>
    )
}