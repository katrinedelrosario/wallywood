import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <ContentWrapper>
            <p>siden blev ikke fundet</p>
            <p><Link to='/'>gå til forsiden</Link></p>
        </ContentWrapper>
    )
}

export default NotFound