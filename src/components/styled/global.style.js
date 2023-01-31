import { createGlobalStyle } from 'styled-components'
import { Reset } from './mixins'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts[1]};
}
body {
    background-color: ${props => props.theme.colors.primary};
    ${Reset};
    text-transform: capitalize;

}
h1 {
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts[0]};
    font-size: 2rem;

}

`
export { GlobalStyle }