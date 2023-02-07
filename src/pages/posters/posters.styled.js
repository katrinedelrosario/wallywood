import styled from 'styled-components'

export const PostersStyle = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
	section {
		border-right: 1px solid ${props => props.theme.colors.secondary};
		padding-right: 5em;
		h2 {
		color: ${props => props.theme.colors.primary};
		font-size: 20px;
		padding-bottom: 0.5em;
		margin-top: -0.5em;
	}

	h4 {
		color: ${props => props.theme.colors.primary};
		font: 14px semibold;
		margin: 0;
	}
	}

	ul {
		text-align: left;
		margin: 0;
		padding: 0;
		li {
			list-style: none;
			font-size: 14px;
			a {
				text-transform: none;
				text-decoration: none;
				font: normal normal normal 14px/19px;
				color: ${props => props.theme.colors.secondary};
	
				&:hover {
					color: ${props => props.theme.colors.primary};

				}
			}
		}
	}
`