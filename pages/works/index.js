import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Works() {
    return (
        <Container large>
            <Meta pageTitle="作品" pageDesc="作品一覧"/>
            <Hero
                title="Works"
                subtitle="制作実績"
            />
        </Container>
        
    )
}