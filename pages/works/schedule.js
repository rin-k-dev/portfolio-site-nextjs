import { getPostBySlug } from "lib/api"
import ContactForm from "components/contactform"
import Container from "components/container"
import Hero from 'components/hero'
import Link from 'next/link'

export default function Schedule({
        title,
        publish,
        content,
        eyecatch,
        categories,
        pcthumbnail,
        spthumbnail,
        workurl,
}) {
    return (
        <Container large>
            <Hero
                title="Works"
                subtitle="制作実績"
            />
            <article style={{position: 'static'}}>
                <h1>{title}</h1>
                <Link href={workurl}>サイトを見る</Link>
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'sugutabe'
    
    const post = await getPostBySlug(slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
            pcthumbnail: post.pcthumbnail,
            spthumbnail: post.spthumbnail,
            workurl: post.workurl,
        }
    }
}