import styled from "styled-components";

const ProfileButtonStyled = styled.button`
	font: var(--button);
	color: var(--white);
	background-color: var(--buttonColor);
	border-radius: 8px;
	padding-block: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	border: 1px solid var(--borderBtn);
	transition: 0.3s ease all;

	:hover {
		background: var(--buttonColor2);
		border: 1px solid var(--grey);
	}
`;
const ProfileButton = ({ children }) => {
	return <ProfileButtonStyled>{children}</ProfileButtonStyled>;
};

export default ProfileButton;
