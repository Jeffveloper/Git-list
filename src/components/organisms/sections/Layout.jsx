import styled from "styled-components";

const LayoutStyled = styled.main`
	min-block-size: 100vh;
	margin: auto;
	max-inline-size: 375px;
	padding-inline: 20px;

	/* border: 3px solid red; */

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 17.375rem 1fr;
		grid-template-rows: auto 1fr;
		max-inline-size: 80rem;
		column-gap: 2rem;
		grid-template-areas: "profile filters" "profile repoList";
	}
	@media (min-width: 1024px) {
		padding-inline: 32px;
	}
`;

function Layout({ children }) {
	return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
