// import relabIconYellow from '../../../public/uploads/image/footer/relabIconYellow.svg'
import styles from './footer.module.css'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import Image from 'next/image'
import RelabIcon from "../../../public/uploads/image/footer/relabIconYellow.png"
import LinkedinIcon from "../../../public/uploads/image/footer/linkedinIcon.png"
import TwitterIcon from "../../../public/uploads/image/footer/twitterIcon.png"
import InstagramIcon from "../../../public/uploads/image/footer/instagramIcon.png"
import LabIcon from "../../../public/uploads/image/footer/labIcon.png"
import JesuitasIcon from "../../../public/uploads/image/footer/jesuitasIcon.png"
import UnisinosIcon from "../../../public/uploads/image/footer/unisinosIcon.png"

const handleMove = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
  };




export default function Footer() {
    
    return (
            <div className={styles.footer}>
                <div className={styles.topPart}>
                    <button onClick={handleMove} className={styles.relabIcon}>
                        <Image
                            
                            src={RelabIcon}
                            
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}/>

                        
                    </button>                
                    
                    <div className={styles.contactSocials}>
                        <span className={styles.contactText}>
                            Entre em contato:
                        </span>
                        <div className={styles.socialIcons}>
                            <a className={styles.linkedinIcon} href='https://www.linkedin.com/company/relabjr/' target="_blank">
                                <Image
                                    src={LinkedinIcon}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}/>
                            </a>
                            <a className={styles.twitterIcon} href='https://www.youtube.com/watch?v=z7rxl5KsPjs' target="_blank">
                                <Image
                                    src={TwitterIcon}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}/>
                            </a>
                            <a className={styles.instagramIcon} href='https://www.instagram.com/relabjrconsultoria/' target="_blank">
                                <Image
                                    src={InstagramIcon}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}/>
                            </a>

                        </div>
                    </div>
                </div>


                
                <div className={styles.bottomPart}>
                    <div className={styles.membershipIcons}>
                        <a className={styles.labIcon} href='https://unisinos.br/lab/programas/relab' target='_blank'>
                            <Image
                                src={LabIcon}
                                sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}/>
                        </a>
                        <a className={styles.jesuitasIcon} href='https://jesuitasbrasil.org.br' target='_blank'>
                            <Image
                                src={JesuitasIcon}
                                sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}/>
                        </a>
                        <a className={styles.unisinosIcon} href='https://www.unisinos.br/' target='_blank'>
                            <Image
                                src={UnisinosIcon}
                                sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}/>
                        </a>
                    </div>

                    <span className={styles.footerText}>
                    <text className={styles.footerText}>© Copyright Confederação Brasileira de Empresas Juniores 2019.</text>
                    <text className={styles.footerText}>Todos os direitos reservados.</text>
                    </span>
                </div>
            </div>
    );
}