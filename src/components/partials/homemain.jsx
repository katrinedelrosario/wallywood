import Data from "../app/data/data"
import styled from "styled-components"


const HomeMain = () => {
    const MainStyle = styled.section`
    max-width: 1012px;
    max-height: 208px;
    display: inline;
    figure {
        display: flex;
        width: 50%;
        text-align: left;
        justify-content: left;

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
            h2 {
                font-size: 15pt;
            }
            p {
                font-size: 10pt;
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