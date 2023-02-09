import styled from 'styled-components'

export const ContainerStyle = styled.section `
    margin: 0 auto;
	background-color: ${props => props.theme.colors.light};
	width: 100%;
	min-height: 100vh;
	max-width: ${props => props.maxwidth}px;
	padding: 1rem 2.3rem;
	div {
		p {
			a {
				text-decoration: none;
			
			}
			::first-letter {
                text-transform: capitalize;
            }
		}
	}
	::first-letter {
                text-transform: capitalize;
            }
    
`
