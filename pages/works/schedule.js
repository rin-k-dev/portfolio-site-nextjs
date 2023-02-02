import { getPostBySlug } from "lib/api"
import ContactForm from 'components/contactform'
import Container from 'components/container'
import Hero from 'components/hero'
import LanchButton from 'components/launchbutton'
import PostHeader from 'components/post-header'
import PostImages from 'components/post-images'
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
            <article>
                <PostHeader title={title} subtitle="概要" publish={publish} />
                <PostImages pcthumbnail={pcthumbnail} spthumbnail={spthumbnail} />
                <LanchButton workurl={workurl}></LanchButton>
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