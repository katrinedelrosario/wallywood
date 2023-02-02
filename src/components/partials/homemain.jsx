import Data from "../app/data/data"
import styled from "styled-components"


const HomeMain = () => {
    const MainStyle = styled.section`
    width: 1012px;
    height: 208;
    figure {
        width: 477px;
        img {
        width: 140px;
        height: 208px;
        }
        figcaption {
            width: 314px;
            height: 114px;
        }
    }
    `
    return (
        <MainStyle>
            <Data />
        </MainStyle>
    )
}

export default HomeMain