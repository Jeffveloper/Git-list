import styled from "styled-components";

const BadgeBtnStyled = styled.button`
	/* .starBtn { */
	display: flex;
	align-items: center;
	background: var(--buttonColor);
	padding-block: 4px;
	padding-inline: 8px 16px;
	gap: 8px;
	border-radius: 8px;
	width: max-content;
	letter-spacing: 1.2px;
	/* } */
	/* .starBtn p { */
	margin: 0;
	font: var(--body2-semi-bold);
	color: var(--white);
	border: 1px solid var(--borderBtn);
	transition: 0.3s ease all;

	:hover {
		background: var(--buttonColor2);
		border: 1px solid var(--grey);
	}
	/* } */
`;

const BadgeBtn = ({ content, children }) => {
	return (
		<BadgeBtnStyled>
			{children}
			{content}
		</BadgeBtnStyled>
	);
};

export default BadgeBtn;
