import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
    return (
        <div className={styles.worksContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post} key={slug}>
                    <Link href={`/works/${slug}`}>
                        <figure>
                            <Image
                                src={eyecatch.url}
                                alt=""
                                width={eyecatch.width}
                                height={eyecatch.height}
                                sizes="(min-width: 768px) 500px, 92vw"
                                placeholder="blur"
                                blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>
                    </Link>
                </article>
            ))}
        </div>
    )
}