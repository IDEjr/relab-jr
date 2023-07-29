import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default () => (
    <>
        <div className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">
                        <h1>Home</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/quemSomos">
                        <h1>Quem Somos</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/servicos">
                        <h1>Serviços</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <h1>Blog</h1>
                    </Link>
                </li>
            </ul>
        </div>
    </>
);