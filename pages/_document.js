import { Html, Head, Main, NextScript } from 'next/document'

import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

export default function Document() {
    return (
        <Html lang={siteLang}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
