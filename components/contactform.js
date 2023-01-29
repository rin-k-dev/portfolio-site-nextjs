import { useForm, ValidationError } from '@formspree/react'
import styles from 'styles/contactform.module.css'

export default function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)
    if (state.succeeded) {
        return (
            <div className={styles.pContactSuccessed}>
                <p>お問い合わせありがとうございます。<br />3営業日以内に返信させていただきます。</p>
            </div>
        )
    }
    return (
        <section className={styles.pSectionContact}>
            <h2>Contact</h2>
            <h3>お問い合わせ</h3>
            <p>
                Web制作のお仕事のご依頼・その他のご相談などございましたら、お気軽に下記フォームよりお問い合わせください。<br /><br />
                <span className={styles.pSectionContactRequired}>*</span>は必須項目です。
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name<span className={styles.pSectionContactRequired}>*</span></label>
                    <span>
                        <input type="text" name="name" size="40" autocomplete="name" required />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </span>
                    <label htmlFor="email">E-Mail<span className={styles.pSectionContactRequired}>*</span></label>
                    <span>
                        <input type="email" name="email" size="40" autocomplete="email" required></input>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </span>
                </div>
                <div>
                    <label htmlFor="message">Message<span className={styles.pSectionContactRequired}>*</span></label>
                    <span>
                        <textarea name="message" cols="41" rows="11" required></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </span>
                </div>
                <button type="submit" disabled={state.submitting} className={styles.cSendButton}>
                    送信
                </button>
                <ValidationError errors={state.errors} />
            </form>
        </section>
    ) 
}