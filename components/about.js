import styles from 'styles/about.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <section className={styles.pSectionAbout}>
            <h2 id="about">About</h2>
            <h3>私について</h3>
            <figure>
                <Image
                    src="/profile.png"
                    alt="プロフィール画像"
                    width={150}
                    height={150}
                    style={{
                        width: '9.375rem',
                        height: '9.375rem',
                    }}
                    blur
                    priority
                />
            </figure>
            <div className={styles.pSectionAbouProfileDescription}>
                <p>
                    Name: Rin K<br />
                    千葉県船橋市出身。大学院修了後、契約社員として都内のIT系企業にてアプリテスターとして5年間勤務。<br />
                    主にスマホゲームや証券系アプリのテスト経験あり。自分でもWebサイトを作ってみたいと思い、<br />
                    2021年12月からWebデザインのスクールであるデジタルハリウッド by LIGでWebデザインの基礎を習得。<br />
                    2023年1月卒業。PCはWindows、Macともに使用可能。
                </p>
            </div>
        </section>
    )
}