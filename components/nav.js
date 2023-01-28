import { useState } from 'react'
import Link from "next/link";
import styles from 'styles/nav.module.css'

export default function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav = () => {
        setNavIsOpen(false)
    }

    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                @media (max-width: 767px) {
                    body {
                        overflow: hidden;
                        position: fixed;
                        width: 100%;
                    }
                }
            `}</style>
            )}

            <button className={styles.btn} onClick={toggleNav}></button>
            <ul className={styles.list}>
                <li>
                    <Link href="/#service" onClick={closeNav}>Service</Link>
                </li>
                <li>
                    <Link href="/works" onClick={closeNav}>Works</Link>
                </li>
                <li>
                    <Link href="/#about" onClick={closeNav}>About</Link>
                </li>
                <li>
                    <Link href="/#contact" className={styles.cContactButton} onClick={closeNav}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}