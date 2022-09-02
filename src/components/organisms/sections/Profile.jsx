// components
import styled from "styled-components";
import InfoItem from "../../molecules/InfoItem";
// icons
import { USER } from "../../icon/U_icon";
import { LINK, LOCATION } from "../../icon/L_icon";
import { STAR } from "../../icon/S_icon";
import { TWITTER } from "../../icon/T_icon";

const ProfileStyled = styled.div`
	grid-area: profile;

	/* profile user*/
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
	.profile__head {
		display: flex;
		gap: 16px;
		align-items: center;
		margin-block-end: 1.5rem;
	}
	.profile__user {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	@media (min-width: 768px) {
		.profile__avatar {
			width: 278px;
			height: 278px;
		}
		.profile__head {
			gap: 24px;
			flex-direction: column;
			align-items: flex-start;
			margin-block-end: 1.5rem;
		}
		.profile__user {
		}
	}

	/* info */
	.profile__desc {
		font: var(--body1-regular);
		color: var(--grey-2);
		margin: 0;
		margin-block-end: 16px;
	}

	/* buttons */
	.profile__buttons {
		display: flex;
		gap: 0.5rem;
		/* margin-block-end: 1.5rem; */
	}

	/* list */
	.info__ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.profile__body {
		display: grid;
		grid-template-rows: auto auto auto;
	}
`;

function Profile() {
	return (
		<ProfileStyled>
			{/* ProfilePic */}
			<div className="profile__head">
				<img
					src="/img/ProfilePicture.png"
					alt="ProfilePicture"
					className="profile__avatar"
					width="278"
					height="278"
				/>
				<div className="profile__user">
					<h1 className="profile__name">Jefferson Araujo</h1>
					<h2 className="profile__userName">Jeffveloper</h2>
				</div>
			</div>
			<div className="profile__body">
				<div className="profile__buttons">
					{/* ProfileInfo */}
					<button>Follow</button>
					<button>Sponsors</button>
				</div>
				{/* profileList */}
				<ul className="info__ul">
					<li>
						<h3 className="profile__desc">Frontend Developer, Beginner</h3>
					</li>
					<InfoItem icon={USER}>
						<span className="info__text--highlight">4.6k</span>
						<span className="info__text">Followers</span>
						<span className="info__text">·</span>
						<span className="info__text--highlight">60</span>
						<span className="info__text">Following</span>
					</InfoItem>
					<InfoItem icon={STAR}>
						<span className="info__text--highlight">81</span>
					</InfoItem>
				</ul>
				<ul className="info__ul">
					<InfoItem icon={LOCATION}>
						<p className="info__text">Location</p>
					</InfoItem>
					<InfoItem icon={LINK}>
						<a href="https://github.com/Jeffveloper" className="info__text">
							https://github.com/Jeffveloper
						</a>
					</InfoItem>
					<InfoItem icon={TWITTER}>
						<a href="https://twitter.com/Jeffveloper" className="info__text">
							@Jeffveloper
						</a>
					</InfoItem>
				</ul>
			</div>
		</ProfileStyled>
	);
}

export default Profile;
