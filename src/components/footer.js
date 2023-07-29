import Link from 'next/link'
import styles from '../styles/geral.module.css'

export default () => (
    <div className={styles['footer']}>
        <br></br>
        <br></br>
        <br></br>
        <h1>Footer</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        <br></br>
        <br></br>
        <br></br>
    </div>
);