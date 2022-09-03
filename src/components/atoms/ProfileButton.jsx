import styled from "styled-components";

const ProfileButtonStyled = styled.button`
	font: var(--button);
	color: var(--white);
	border-color: var(--grey);
	border-width: 2px;
	border-style: solid;
	background-color: var(--buttonColor);
	border-radius: 8px;
	padding-block: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;
const ProfileButton = ({ children }) => {
	return <ProfileButtonStyled>{children}</ProfileButtonStyled>;
};

export default ProfileButton;
