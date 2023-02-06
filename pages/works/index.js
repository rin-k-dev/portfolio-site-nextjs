import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import BreadCrumbs from 'components/breadcrumbs'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'

//Eyecatch for local
import { eyecatchLocal } from 'lib/constants'

export default function Works({ posts }) {
    return (
        <Container large>
            <Meta pageTitle="作品" pageDesc="作品一覧"/>
            <Hero
                title="Works"
                subtitle="制作実績"
            />
            <BreadCrumbs
                lists={[
                    {
                        string: "ホーム",
                        path: "/",
                    },
                    {
                        string: "制作実績",
                        path: "/works",
                    },
                ]}
            />
            <Posts posts={posts} />
        </Container>
        
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()

    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return {
        props: {
            posts: posts,
        },
    }
}