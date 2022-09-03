// components
import styled from "styled-components";
import InfoItem from "../../molecules/InfoItem";
import ProfileButton from "../../atoms/ProfileButton";
// icons
import { USER } from "../../icon/U_icon";
import { LINK, LOCATION } from "../../icon/L_icon";
import { STAR } from "../../icon/S_icon";
import { TWITTER } from "../../icon/T_icon";
// img
import ProfilePicture from "/img/ProfilePicture.png";
import { HEART } from "../../icon/H_icon";
import Icon from "../../atoms/Icon";

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
		.profile__buttons {
			grid-row: 1 / 2 !important;
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
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
		grid-row: 3 / 4;
	}

	/* list */
	.info__list {
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 16px;
		display: flex;
		flex-direction: column;
	}
	.info__list li {
	}

	/* main grid */
	.profile__body {
		display: grid;
		grid-template-rows: auto auto auto;
		gap: 24px;
	}

	a {
		text-decoration: none;
	}

	.profile__body svg {
		fill: var(--bg);
		stroke: var(--grey);
	}

	.profile__desc {
		margin: 0;
	}
`;

function Profile() {
	return (
		<ProfileStyled>
			{/* ProfilePic */}
			<div className="profile__head">
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
			</div>
			<div className="profile__body">
				<div className="profile__buttons">
					{/* ProfileInfo */}
					<ProfileButton>Follow</ProfileButton>
					<ProfileButton>
						<Icon icon={HEART} />
						Sponsors
					</ProfileButton>
				</div>
				{/* profileList */}
				<ul className="info__list">
					<li>
						<h3 className="profile__desc">Frontend Developer, Beginner</h3>
					</li>
					<li>
						<InfoItem icon={USER}>
							<span className="info__text--highlight">4.6k</span>
							<span className="info__text">Followers</span>
							<span className="info__text">·</span>
							<span className="info__text--highlight">60</span>
							<span className="info__text">Following</span>
						</InfoItem>
					</li>
					<li>
						<InfoItem icon={STAR}>
							<span className="info__text--highlight">81</span>
						</InfoItem>
					</li>
				</ul>
				<ul className="info__list">
					<li>
						<InfoItem icon={LOCATION}>
							<p className="info__text">Location</p>
						</InfoItem>
					</li>
					<li>
						<InfoItem icon={LINK}>
							<a href="https://github.com/Jeffveloper" className="info__text">
								https://github.com/Jeffveloper
							</a>
						</InfoItem>
					</li>
					<li>
						<InfoItem icon={TWITTER}>
							<a href="https://twitter.com/Jeffveloper" className="info__text">
								@Jeffveloper
							</a>
						</InfoItem>
					</li>
				</ul>
			</div>
		</ProfileStyled>
	);
}

export default Profile;
