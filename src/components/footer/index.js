import styles from './footer.module.css'
import Image from 'next/image'
import {FaInstagram, FaLinkedin,FaEnvelope} from "react-icons/fa"


const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
};

export default function Footer(footerData) {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.linearGradient}/>
        {/* <Image 
        src={footerData.background}
        
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.bgImgHandle}
        
        >
        </Image> */}
        <div className={styles.topPart}>
          <button onClick={handleMove} className={styles.relabIcon}>
            <Image
              src={footerData.logo}
              width={150}
              height={150}
              className={styles.logoImg}
            />
          </button>        
          <div className={styles.contactSocials}>
            <span className={styles.contactText}>
              Entre em contato:
            </span>
            <div className={styles.socialIcons}>
              <a className={styles.linkedinIcon} href={footerData.linkedin} target="_blank">
                <FaLinkedin size={40}/>
              </a>
              <a className={styles.mailIcon} href='/' target="_blank">
                <FaEnvelope size={40}/>
              </a>
              <a className={styles.instagramIcon} href={footerData.instagram} target="_blank">
                <FaInstagram size={40}/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomPart}>
          <div className={styles.membershipIcons}>
            <a className={styles.labIcon} href='https://unisinos.br/lab/programas/relab' target='_blank'>
              <Image
                src={footerData.watermark1}
                width={90}
                height={35}
                className={styles.watermark1}
                quality={100}
              />
            </a>            
            <a className={styles.jesuitasIcon} href='https://jesuitasbrasil.org.br' target='_blank'>
              <Image
                src={footerData.watermark2}
                width={165}
                height={50}
                className={styles.watermark2}
                quality={100}
              />
            </a>
            <a className={styles.unisinosIcon} href='https://www.unisinos.br/' target='_blank'>
              <Image
                src={footerData.watermark3}
                width={150}
                height={40}
                className={styles.watermark3}
                quality={100}
              />
            </a>
          </div>
          <span className={styles.footerText}>
          <text className={styles.footerText}>{footerData.copy}</text>
          </span>
        </div>
      </div>
    </>
  );
}