import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"

const NotFound = () => {
    return (
        <ContentWrapper>
            <p>siden blev ikke fundet</p>
            <p><link to='/'>gå til forsiden</link></p>
        </ContentWrapper>
    )
}

export {NotFound}