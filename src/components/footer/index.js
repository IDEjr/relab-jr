import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'


const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer({ contato, footer }) {
  
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.linearGradient}/>
        <div className={styles.topPart}>
          <Link href="/" onClick={handleMove}>
              <Image
                src={footer.logo}
                width={150}
                height={150}
                className={styles.relabLogo}
                alt="Logo"
              />
          </Link>
          <div className={styles.contactSocials}>
            <h3 className={styles.contactText}>
              {footer.textoContato}
            </h3>
            <div className={styles.socialIcons}>
              <a className={styles.linkedinIcon} href={contato.linkedin} target="_blank">
                <FaLinkedin size={40}/>
              </a>
              <a className={styles.mailIcon} href={`mailto:${contato.email}`} target="_blank">
                <FaEnvelope size={40}/>
              </a>
              <a className={styles.instagramIcon} href={contato.instagram} target="_blank">
                <FaInstagram size={40}/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomPart}>
          <div className={styles.membershipIcons}>
            <a className={styles.watermarkCover} href={footer.link1} target='_blank'>
              <Image
                src={footer.watermark1}
                fill
                style={{objectFit: 'contain'}}
                className={styles.watermark}
                quality={100}
                alt={footer.link1}
              />
            </a>
            <a className={styles.watermarkCover} href={footer.link2} target='_blank'>
              <Image
                src={footer.watermark2}
                fill
                style={{objectFit: 'contain'}}
                className={styles.watermark}
                quality={100}
                alt={footer.link2}
              />
            </a>
            <a className={styles.watermarkCover} href={footer.link3} target='_blank'>
              <Image
                src={footer.watermark3}
                fill
                style={{objectFit: 'contain'}}
                className={styles.watermark}
                quality={100}
                alt={footer.link3}
              />
            </a>
          </div>
          <div className={styles.footerText}>
            <p className={styles.footerText}>{footer.copy}</p>
          </div>
        </div>
      </div>
    </>
  );
}