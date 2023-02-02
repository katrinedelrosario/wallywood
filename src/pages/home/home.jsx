import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
import SlideWrapper from "../../components/app/slidewrapper/slidewrapper"
import HomeMain from "../../components/partials/homemain"


const Home = () => {
    return (
        <>
            <SlideWrapper />
            <ContentWrapper
                title='sidste nyt...'
                description=''>
                <section><HomeMain /></section>
            </ContentWrapper>
        </>
    )
}

export default Home
