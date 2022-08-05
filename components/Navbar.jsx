import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import MenuIcon from './MenuIcon'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <img src='./favicon.ico' />
            <MenuIcon className={styles.hambergar}/>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/posts">Posts</Link></li>
            </ul>
        </div>
    )
}

export default Navbar