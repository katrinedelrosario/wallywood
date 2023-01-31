import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
import SlideWrapper from "../../components/app/slidewrapper/slidewrapper"


const Home = () => {
    return (
        <>
            <SlideWrapper />
            <ContentWrapper
                title='sidste nyt...'
                description='description'            
                >
            </ContentWrapper>
        </>
    )
}

export default Home
