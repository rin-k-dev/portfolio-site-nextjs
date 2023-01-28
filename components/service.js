import styles from 'styles/service.module.css'

export default function Service() {
    return (
        <section className={styles.pSectionService}>
            <h2 id="service">Service</h2>
            <h3>できること</h3>
            <div className={styles.pSectionServiceItems}>
                <article>
                    <h4>HTML/CSSコーディング</h4>
                    <p>デザインカンプをもとにHTML/CSSでコーディングを行います。</p>
                    <ul>
                        <li>最新のHTML/CSSに基づいたコーディング</li>
                        <li>BEM、FLOCSSなどのCSS設計に柔軟に対応可能</li>
                        <li>SassやNode.jsを用いたコーディングも可能</li>
                    </ul>
                </article>
                <article>
                    <h4>WordPressサイトの構築</h4>
                    <p>WordPressを用いたWebサイト構築が可能です。</p>
                    <ul>
                        <li>オリジナルテーマの作成</li>
                        <li>プラグインの設定やカスタマイズ</li>
                        <li>JavaScriptライブラリのサイトへの導入</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}