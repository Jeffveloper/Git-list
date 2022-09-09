import styled from "styled-components";
// components
import ProfileHead from "../ProfileHead";
import ProfileBody from "../ProfileBody";

const ProfileStyled = styled.div`
	grid-area: profile;
	padding-block-start: 24px;
	padding-block-end: 40px;
`;

const Profile = () => {
	return (
		<ProfileStyled>
			<ProfileHead />
			<ProfileBody />
		</ProfileStyled>
	);
};

export default Profile;
