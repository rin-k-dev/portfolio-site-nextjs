import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import LanchButton from 'components/launchbutton'
import PostHeader from 'components/post-header'
import PostImages from 'components/post-images'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'
import { getPlaiceholder } from 'plaiceholder'

// Eyecatch image for local
import { eyecatchLocal } from 'lib/constants'

export default function Schedule({
        title,
        publish,
        content,
        eyecatch,
        categories,
        description,
        pcthumbnail,
        spthumbnail,
        workurl,
}) {
    return (
        <Container large>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <Hero
                title="Works"
                subtitle="制作実績"
            />
            <article>
                <PostHeader title={title} subtitle="概要" publish={publish} />
                <PostBody>
                    <ConvertBody contentHTML={content} />
                </PostBody>
                <PostImages pcthumbnail={pcthumbnail} spthumbnail={spthumbnail} />
                <LanchButton workurl={workurl}></LanchButton>
            </article>
        </Container>
    )
}

export async function getStaticPaths() {
    return {
        paths: ['/works/sugutabe',],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug
    
    const post = await getPostBySlug(slug)

    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
            description: description,
            pcthumbnail: post.pcthumbnail,
            spthumbnail: post.spthumbnail,
            workurl: post.workurl,
        }
    }
}