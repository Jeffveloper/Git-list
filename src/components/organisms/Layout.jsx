import styled from "styled-components";

const LayoutStyled = styled.main`
	min-block-size: 100vh;
	margin: auto;
	max-inline-size: 75rem;
	padding-inline: 20px;

	border: 3px solid red;

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 278px 1fr;
		grid-template-rows: auto 1fr;
		column-gap: 2rem;
		grid-template-areas: "profile filters" "profile repoList";
	}
`;

function Layout({ children }) {
	return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
