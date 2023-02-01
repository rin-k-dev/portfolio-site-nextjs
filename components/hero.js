import styles from 'styles/hero.module.css'
import Image from 'next/image'
import worksbgsp from 'images/works-bg-sp.png'
import worksbgpc from 'images/works-bg-pc.png'

export default function Hero({ title, subtitle }) {
    return (
        <div className={styles.lHeroContainer}>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <Image className={styles.uDisplaySpOnly}
                src={worksbgsp}
                alt=""
                width={1440}
                height={350}
                sizes="100vw"
                priority
                blur
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            <Image className={styles.uDisplayPcOnly}
                src={worksbgpc}
                alt=""
                width={1440}
                height={350}
                sizes="100vw"
                priority
                blur
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
        </div>
    )
}