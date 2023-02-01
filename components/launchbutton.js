import Link from 'next/link'
import styles from 'styles/launchbutton.module.css'

export default function LanchButton({ workurl }) {
    return (
        <div className={styles.cLaunchButton}>
            <Link href={workurl}>サイトを見る</Link>
        </div>
       
    )
}