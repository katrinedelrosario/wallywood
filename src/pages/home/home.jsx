import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
import DataList from "../../components/app/data/data"
import SlideWrapper from "../../components/app/slidewrapper/slidewrapper"


const Home = () => {
    return (
        <>
            <SlideWrapper />
            <ContentWrapper
                title='sidste nyt...'
                description=''>
                <section><DataList /></section>
            </ContentWrapper>
        </>
    )
}




export default Home
