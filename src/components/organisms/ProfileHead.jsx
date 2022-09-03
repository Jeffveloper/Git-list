import styled from "styled-components";
// img
import ProfilePicture from "/img/ProfilePicture.png";

const ProfileHeadStyled = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	gap: 16px;
	align-items: center;
	margin-block-end: 1.5rem;

	.profile__avatar {
		border: solid 1px var(--grey-2);
		border-radius: 50%;
		overflow: hidden;
		box-sizing: border-box;
		width: 5rem;
		height: auto;
	}

	.profile__userName {
		display: flex;
		flex-direction: column;
		gap: 8px;
		box-sizing: border-box;
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow-x: auto;
	}
	.profile__name {
		box-sizing: border-box;
		font: var(--headline1);
		color: var(--white);
		margin: 0;
		flex: 1;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: 100%;
	}
	.profile__user {
		font: var(--headline2-ligth);
		color: var(--grey-2);
		margin: 0;
	}

	@media (min-width: 768px) {
		gap: 24px;
		flex-direction: column;
		align-items: flex-start;
		margin-block-end: 1.5rem;

		.profile__avatar {
			width: 278px;
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
			<div className="profile__userName">
				<h1 className="profile__name">Jefferson Araujogaaaaaaa</h1>
				<h2 className="profile__user">Jeffveloper</h2>
			</div>
		</ProfileHeadStyled>
	);
};

export default ProfileHead;
