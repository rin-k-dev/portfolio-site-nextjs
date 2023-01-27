import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.lHeader}>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}