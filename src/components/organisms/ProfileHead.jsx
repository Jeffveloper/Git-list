import styled from "styled-components";
// img
import ProfilePicture from "/img/ProfilePicture.png";

const ProfileHeadStyled = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
	margin-block-end: 1.5rem;

	.profile__avatar {
		border: solid 1px var(--grey-2);
		border-radius: 50%;
		overflow: hidden;
		box-sizing: border-box;
		width: 5rem;
		height: 5rem;
	}

	.profile__name {
		font: var(--headline1);
		color: var(--white);
		margin: 0;
	}
	.profile__userName {
		font: var(--headline2-ligth);
		color: var(--grey-2);
		margin: 0;
	}

	.profile__user {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	@media (min-width: 768px) {
		gap: 24px;
		flex-direction: column;
		align-items: flex-start;
		margin-block-end: 1.5rem;

		.profile__avatar {
			width: 278px;
			height: 278px;
		}
	}
`;

const ProfileHead = () => {
	return (
		<ProfileHeadStyled>
			<img
				src={ProfilePicture}
				alt="ProfilePicture"
				className="profile__avatar"
				width="278"
				height="278"
			/>
			<div className="profile__user">
				<h1 className="profile__name">Jefferson Araujo</h1>
				<h2 className="profile__userName">Jeffveloper</h2>
			</div>
		</ProfileHeadStyled>
	);
};

export default ProfileHead;
