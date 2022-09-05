import styled from "styled-components";
// components
import ProfileHead from "../ProfileHead";
import ProfileBody from "../ProfileBody";
// custom hooks
import useConnection from "../../../hooks/useConnection";

const ProfileStyled = styled.div`
	grid-area: profile;
	padding-block-start: 24px;
	padding-block-end: 40px;
`;

const Profile = () => {
	const userData = useConnection("/Jeffveloper");

	return (
		<ProfileStyled>
			{/* ProfilePic */}
			<ProfileHead user={userData} />
			<ProfileBody user={userData} />
		</ProfileStyled>
	);
};

export default Profile;
