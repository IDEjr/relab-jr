import styles from './navbar.module.css';
import { useRef } from "react";
import Image from 'next/image'
import { FaBars, FaTimes, FaInstagram, FaLinkedin,FaEnvelope} from "react-icons/fa";
import classnames from 'classnames';
import Link from 'next/link'

export default function navbar({logo,linkedin, instagram, email }) {
    const navRef = useRef();
    const logoRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsiveNav"
		);
        logoRef.current.classList.toggle(
			"responsiveLogo"
		);
	};
    
    return(
        
            <header className={styles.cabecalho}>
                <a href="/" className={styles.logo} >
                    <Image
                        src={logo}
                        width={95}
                        height={95}
                        alt="Logo"
                    />
                        
                </a>
                <nav className={styles.navbar} ref={navRef}>
                    <button className={
                            classnames(
                              styles.navBtn,
                              styles.navRelabBtn
                            )
                          } ref={logoRef}>
                          <Image
                        src={logo}
                        width={95}
                        height={95}
                        alt="Logo"
                    />
                    </button>
                    {/*<a href="/">HOME</a>*/}
                    <a href="/quemSomos">QUEM SOMOS</a>
                    <a href="/servicos">SERVIÇOS</a>
                    <a href="/blog">BLOG</a>
                    <button
                        className={
                            classnames(
                              styles.navBtn,
                              styles.navCloseBtn
                            )
                          }
                        onClick={showNavbar}>
                        
                        <FaTimes />
                    </button>
                    <div className={styles.links}>
                        <button
                            className={
                                classnames(
                                styles.navBtn
                                )
                            }
                            onClick={showNavbar}>
                            <Link href={instagram} target="_blank"><FaInstagram /></Link>
                        </button>
                        <button
                            className={
                                classnames(
                                styles.navBtn
                                
                                )
                            }
                            onClick={showNavbar}>
                            <Link href={linkedin} target="_blank"><FaLinkedin /></Link>
                        </button>
                        <button
                            className={
                                classnames(
                                styles.navBtn
                                )
                            }
                            onClick={showNavbar}>
                            <Link href={email} target="_blank"><FaEnvelope /></Link>
                        </button>
                    </div>
                    
                </nav>
                <button
                    className={styles.navBtn}
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        

    );
}