import styled from "styled-components";

export const PostersListStyle = styled.section`
	margin: 0;
	padding: 0;
    display: inline;
    ul {
        padding: 0;
        margin: 0 0 1.5em 0;
        position: relative;

        display: grid; 
grid-template-columns: repeat(3, 1fr); 
grid-template-rows: 1fr; 
grid-column-gap: 1em;
grid-row-gap: 0px; 

        li {

        }
        figure {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: left;
		max-width: 30%;

        img {
        max-width: auto;
        max-height: 27vh;
        align-items: left;
        }
        figcaption {
            align-items: right;
            padding-left: 1em;
            h2 {
                font-size: 20px;
                margin-top: 0;
                max-width: 90%;
                color: ${props => props.theme.colors.tertiary};
            }
            p {
                font-size: 14px;
                color: ${props => props.theme.colors.tertiary};
                max-width: 90%;
                margin-bottom: 2em;
            }
            button {
            font-size: 16px;
            color: ${props => props.theme.colors.tertiary};
            border: 1px solid ${props => props.theme.colors.tertiary};
            position: absolute;
            max-width: 6em;
            min-height: 2em;
            align-items: left;
            border-radius: 3px;
            opacity: 1;
            bottom: 0;
            background-color: ${props => props.theme.colors.quinary};
            ::first-letter {
                text-transform: capitalize;
            }
            &:hover {
                background-color: ${props => props.theme.colors.senary};
                color: ${props => props.theme.colors.light};
            }
        }

        }
    }

    }

`
