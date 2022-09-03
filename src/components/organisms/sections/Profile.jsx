// components
import styled from "styled-components";

import ProfileHead from "../ProfileHead";
import ProfileBody from "../ProfileBody";

// img

const ProfileStyled = styled.div`
	grid-area: profile;
	padding-block-start: 24px;
	padding-block-end: 40px;
`;

function Profile() {
	return (
		<ProfileStyled>
			{/* ProfilePic */}
			<ProfileHead />
			<ProfileBody />
		</ProfileStyled>
	);
}

export default Profile;
