import styles from 'styles/works.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Works({ posts }) {
    return (
        <section className={styles.pSectionWorks}>
            <h2>Works</h2>
            <h3>制作実績</h3>
            <div className={styles.pSectioinWorksItems}>
                {posts.map(({ title, slug, eyecatch }) => (
                    <article className={`${styles.post}`} key={slug}>
                        <Link href={`/works/${slug}`}>
                            <figure>
                                <Image
                                    src={eyecatch.url}
                                    alt=""
                                    width={500}
                                    height={300}
                                    sizes="(min-width: 768px) 500px, 84%"
                                    placeholder="blur"
                                    blurDataURL={eyecatch.blurDataURL}
                                />
                            </figure>
                        </Link>
                    </article>
                ))}
            </div>
            <div className={styles.cMoreButton}>
                <Link href="/works">
                    もっと見る
                </Link>
            </div>
        </section>
    )
}