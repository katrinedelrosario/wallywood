import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
//import { usePosterData } from "../../components/app/posterlist/posterlist"
import SlideWrapper from "../../components/app/slidewrapper/slidewrapper"
import HomeMain from "../../components/partials/homemain"


const Home = () => {
    //const {posterlist} = usePosterData()

    return (
        <>
            <SlideWrapper />
            <ContentWrapper
                title='sidste nyt...'
                description=''>
                <section><HomeMain/></section>
            </ContentWrapper>
        </>
    )
}

export default Home
