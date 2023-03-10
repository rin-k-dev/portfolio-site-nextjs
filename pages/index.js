import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import MainVisual from 'components/main-visual'
import Description from 'components/description'
import Service from 'components/service'
import Works from 'components/works'
import { getPlaiceholder } from 'plaiceholder'
import About from 'components/about'
import ContactForm from 'components/contactform'

import { eyecatchLocal } from 'lib/constants'

export default function Home({ posts }) {
    return (
        <>
            <Container large>
                <Meta />
                <MainVisual />
                <Description />
                <Service />
                <Works posts={posts} />
                <About />
                <ContactForm />
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts(2)

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