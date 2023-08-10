// import relabIconYellow from '../../../public/uploads/image/relabIconYellow.svg'
import styles from './footer.module.css'

const handleMove = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
  };



function Footer() {
    return (
        <>
            <div className={styles['footer']}>
                <div className={styles['top-part']}>
                    <button onClick={handleMove} className={styles['relab-icon']}>
                    </button>                
                    
                    <div className={styles['contact-socials']}>
                        <span className={styles['contact-text']}>
                            Entre em contato:
                        </span>
                        <br/>
                        <div className={styles['social-icons']}>
                            <a className={styles['linkedin-icon']} href='https://www.linkedin.com/company/relabjr/' target="_blank">
                                
                            </a>
                            <a className={styles['twitter-icon']} href='https://www.youtube.com/watch?v=z7rxl5KsPjs' target="_blank">
                            
                            </a>
                            <a className={styles['instagram-icon']} href='https://www.instagram.com/relabjrconsultoria/' target="_blank">
                                
                            </a>

                        </div>
                    </div>
                </div>


                
                <div className={styles['bottom-part']}>
                    <div className={styles['membership-icons']}>
                        <a className={styles['lab-icon']} href='https://unisinos.br/lab/programas/relab' target='_blank'>

                        </a>
                        <a className={styles['jesuitas-icon']} href='https://jesuitasbrasil.org.br' target='_blank'>

                        </a>
                        <a className={styles['unisinos-icon']} href='https://www.unisinos.br/' target='_blank'>

                        </a>
                    </div>

                    <span className={styles['footer-text']}>
                    <text className={styles['footer-text']}>© Copyright Confederação Brasileira de Empresas Juniores 2019.</text>
                    <text className={styles['footer-text']}>Todos os direitos reservados.</text>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Footer;