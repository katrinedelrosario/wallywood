import Data from "../app/data/data"
import styled from "styled-components"


const HomeMain = () => {
    const MainStyle = styled.section`
    max-width: 1012px;
    max-height: 208px;
    display: inline;
    margin: 0 0;
    padding: 0 0;
    figure {
        border: solid purple;
        width: 506px;
        display: flex;
        justify-content: left;
        align-items: left;
        img {
        width: 140px;
        align-items: left;
        }
        figcaption {
            width: 314px;
            height: 114px;
            align-items: right;
            padding-left: 1em;
            top: 509px;
            left: 871px;
            width: 314px;
            h2 {
                font-size: 15pt;
            }
            p {
                font-size: 10pt;
                width: 75%;
                
            }
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