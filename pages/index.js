import Meta from 'components/meta'
import Container from 'components/container'
import MainVisual from 'components/main-visual'
import Description from 'components/description'
import Service from 'components/service'
import Works from 'components/works'

export default function Home() {
    return (
        <>
            <Container large>
                <Meta />
                <MainVisual />
                <Description />
                <Service />
                <Works />
            </Container> 
        </>
        
        
    )
}