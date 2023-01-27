import styles from 'styles/works.module.css'
import Link from 'next/link'

export default function Works() {
    return (
        <section className={styles.pSectionWorks}>
            <h2>Works</h2>
            <h3>制作実績</h3>
            <div className={styles.cMoreButton}>
                <Link href="/works">
                    もっと見る
                </Link>
            </div>
        </section>
    )
}