import styled from 'styled-components'

export const PostersStyle = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
	div {

	}
	h2 {
		color: ${props => props.theme.colors.primary};
		font-size: 20px;
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
				font-size: 14px;
				color: ${props => props.theme.colors.secondary};
				&:hover {
					color: ${props => props.theme.colors.primary};

				}
			}
		}
	}
`