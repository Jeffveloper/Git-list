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
import { HEART } from "../../icon/H_icon";
import Icon from "../../atoms/Icon";
import ProfileHead from "../ProfileHead";

const ProfileStyled = styled.div`
	grid-area: profile;

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
	@media (min-width: 768px) {
		.profile__buttons {
			grid-row: 1 / 2 !important;
		}
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

	.profile__desc {
		margin: 0;
	}
`;

function Profile() {
	return (
		<ProfileStyled>
			{/* ProfilePic */}
			<ProfileHead />
			<ProfileBody />
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
