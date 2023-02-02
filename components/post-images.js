import Image from 'next/image'
import styles from 'styles/post-images.module.css'

export default function PostImages({ pcthumbnail, spthumbnail }) {
    return (
        <div className={`${styles.flexContainer}`}>
            <Image className={`${styles.pcimage}`}
                src={pcthumbnail.url}
                alt=''
                width={pcthumbnail.width}
                height={pcthumbnail.height}
                sizes="100vw"
                priority
            />
            <Image className={`${styles.spimage}`}
                src={spthumbnail.url}
                alt=''
                width={spthumbnail.width}
                height={spthumbnail.height}
                sizes="100vw"
                priority
            />
        </div>
    )
}