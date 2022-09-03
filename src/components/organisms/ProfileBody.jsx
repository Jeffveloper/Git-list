import styled from "styled-components";
import ProfileButton from "../atoms/ProfileButton";
// icons
import { USER } from "../icon/U_icon";
import { LINK, LOCATION } from "../icon/L_icon";
import { STAR } from "../icon/S_icon";
import { TWITTER } from "../icon/T_icon";
import { HEART } from "../icon/H_icon";
import Icon from "../atoms/Icon";
// colors
import { COLORJS } from "../settings/Colors";

const ProfileBodyStyled = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	gap: 24px;

	.info__list > * {
		box-sizing: border-box;
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

	.profile__desc {
		font: var(--body1-regular);
		color: var(--grey-2);
		margin: 0;
	}
	.info__text {
		font: var(--body2-regular);
		color: var(--grey);
		margin: 0;
	}
	.info__text--highlight {
		font: var(--body2-semi-bold);
		color: var(--white);
		margin: 0;
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
		display: flex;
		align-items: left;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 8px;
	}

	a {
		text-decoration: none;
	}
`;

const ProfileBody = () => {
	return (
		<ProfileBodyStyled>
			{/* profilebuttons ------------------------*/}
			<div className="profile__buttons">
				<ProfileButton>Follow</ProfileButton>
				<ProfileButton>
					<Icon
						icon={HEART}
						color={COLORJS.buttonColor}
						stroke={COLORJS.pink}
					/>
					Sponsors
				</ProfileButton>
			</div>
			{/* profileList ------------------------*/}
			<ul className="info__list">
				<li>
					<h3 className="profile__desc">Frontend Developer, Beginner</h3>
				</li>
				<li>
					<Icon icon={USER} color={COLORJS.bg} stroke={COLORJS.grey} />
					<span className="info__text--highlight">4.6k</span>
					<span className="info__text">Followers</span>
					<span className="info__text">·</span>
					<span className="info__text--highlight">60</span>
					<span className="info__text">Following</span>
					<span className="info__text--highlight">81</span>
					<span className="info__text">·</span>
					<Icon icon={STAR} color={COLORJS.bg} stroke={COLORJS.grey} />
					<span className="info__text--highlight">81</span>
				</li>
				{/* <li>
					<Icon icon={STAR} color={COLORJS.bg} stroke={COLORJS.grey} />
				</li> */}
			</ul>
			<ul className="info__list">
				<li>
					<Icon icon={LOCATION} color={COLORJS.bg} stroke={COLORJS.grey} />
					<p className="info__text">Location</p>
				</li>
				<li>
					<Icon icon={LINK} color={COLORJS.bg} stroke={COLORJS.grey} />
					<a href="https://github.com/Jeffveloper" className="info__text">
						https://github.com/Jeffveloper
					</a>
				</li>
				<li>
					<Icon icon={TWITTER} color={COLORJS.bg} stroke={COLORJS.grey} />
					<a href="https://twitter.com/Jeffveloper" className="info__text">
						@Jeffveloper
					</a>
				</li>
			</ul>
		</ProfileBodyStyled>
	);
};

export default ProfileBody;
