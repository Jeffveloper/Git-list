import styled from "styled-components";
import Icon from "../atoms/Icon";
import { USER } from "../icon/U_icon";

const ProfileStyled = styled.div`
	grid-area: profile;

	.info {
		border: solid 1px red;
		color: var(--grey-1);
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-block: 1rem;
		font: var(--body2-semi-bold);
	}
	a:hover {
		text-decoration: underline;
	}
	.avatar {
		border-radius: 50%;
		border: solid 1px var(--grey-1);
		overflow: hidden;
		box-sizing: border-box;
		margin-block-end: 1.5rem;
	}
	.name {
		font: var(--headline1);
		color: var(--white);
		margin: 0;
		margin-block-end: 0.5rem;
	}
	.userName {
		font: var(--headline2-ligth);
		margin-block-end: 1.5rem;
		margin-block-start: 0.5rem;
	}
	.buttons {
		display: flex;
		gap: 0.5rem;
		margin-block-end: 1.5rem;
	}
`;

function Profile() {
	return (
		<ProfileStyled>
			<img src="" alt="" className="avatar" width="278" height="278" />
			<p className="name">Jefferson Araujo</p>
			<p className="userName">Jeffveloper</p>
			<div className="buttons">
				<button>Follow</button>
				<button>Sponsors</button>
			</div>
			<p className="bio info">hola mundo!</p>
			<p className="followers info">
				•<span>Followers</span>
				<span>•</span>
				<span>Folling</span>
			</p>
			<p className="stars info">• 99</p>
			<p className="location info">• Lima Perú</p>
			<a
				className="info"
				href="https://github.com"
				target="_blank"
				rel="noreferrer"
			>
				https://github.com
			</a>
			<a
				className="info"
				href="https://github.com"
				target="_blank"
				rel="noreferrer"
			>
				@Jeffveloper
			</a>
			<span style={{ color: "red" }}>
				<Icon icon={USER} />
			</span>
		</ProfileStyled>
	);
}

export default Profile;
