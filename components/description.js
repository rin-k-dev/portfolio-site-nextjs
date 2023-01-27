import utils from 'styles/utils.module.css'
import styles from 'styles/description.module.css'

export default function Description() {
    return (
        <div className={`${utils.uDisplaySpOnly} ${styles.lDescription}`}>
            <div className={styles.pDescription}>
                <h2>Rin K</h2>
                <p>
                    千葉県在住のWebコーダーです。<br />
                    ポートフォリオをご覧いただきありがとうございます。<br />
                    Web制作のお仕事承ります。<br />
                </p>
            </div>
        </div>
    )
}