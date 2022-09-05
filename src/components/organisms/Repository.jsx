import styled from "styled-components";
import Icon from "../atoms/Icon";
import { STAR } from "../icon/S_icon";
import { BRANCH } from "../icon/B_icon";
import { COLORJS } from "../settings/Colors";
import Line from "/img/ActivityLine.png";

const RepositoryStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-block-end: 32px;
	margin-block-end: 32px;
	border-block-end: solid 1px var(--grey);

	.repo__col--1 {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	/* repo head */
	.repo__head {
		display: flex;
		gap: 16px;
		height: auto;
	}
	.repo__title {
		color: var(--primary);
		font: var(--headline2-semi-bold);
		margin: 0;
	}
	.repo__visibility {
		color: var(--grey);
		font: var(--caption-regular);
		border: solid 1px var(--grey);
		display: inline;
		padding: 2px 8px;
		border-radius: 8px;
		margin: 0;
	}

	/* repo desc */
	.repo__desc {
		font: var(--body2-regular);
		color: var(--grey);
		margin: 0;
	}

	/* tags */

	.repo_tags {
		display: flex;
		gap: 5px;
	}
	.tag {
		font: var(--caption-medium);
		color: var(--primary);
		margin: 0;
		background-color: #15223a;
		padding: 4px 12px;
		border-radius: 38px;
	}

	/* repo__stats */
	.repo__stats {
		display: flex;
		gap: 16px;
		color: var(--grey);
		font: var(--caption-regular);
	}
	.repo__stats svg {
		width: 20px;
	}
	.repo__stats p {
		margin: 0;
	}
	.tech,
	.stars,
	.forks {
		display: flex;
		gap: 8px;
		align-items: center;
	}
	.color {
		border-radius: 50%;
		width: 16px;
		height: 16px;
		background-color: yellow;
	}
	/* -------------------- */
	.repo__col--2 {
		display: flex;
		gap: 16px;
		justify-content: space-between;
	}
	.starBtn {
		display: flex;
		background: var(--buttonColor);
		padding: 8px 16px;
		gap: 8px;
		border-radius: 8px;
		width: max-content;
	}
	.starBtn p {
		margin: 0;
		font: var(--body2-semi-bold);
		color: var(--white);
	}

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 60% 40%;
	}
	.repo__col--2 {
		flex-direction: column;
		align-items: flex-end;
		gap: 48px;
		align-self: flex-start;
	}
`;

const Repository = () => {
	return (
		<RepositoryStyled>
			<div className="repo__col--1">
				<div className="repo__head">
					<h2 className="repo__title">Proyecto tututu</h2>
					<p className="repo__visibility">Public</p>
				</div>
				<p className="repo__desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos in hic
					sapiente quaerat consequuntur. Recusandae sint architecto non quisquam
				</p>
				<div className="repo_tags">
					<p className="tag">HTML</p>
					<p className="tag">CSS</p>
					<p className="tag">JS</p>
				</div>
				<div className="repo__stats">
					<div className="tech">
						<div className="color"></div>
						<p>JS</p>
					</div>
					<div className="stars">
						<Icon
							icon={STAR}
							color={COLORJS.buttonColor}
							stroke={COLORJS.grey}
						></Icon>
						<p>999</p>
					</div>
					<div className="forks">
						<Icon
							icon={BRANCH}
							color={COLORJS.buttonColor}
							stroke={COLORJS.grey}
						></Icon>
						<p>9</p>
					</div>
					<p>updated 19 days ago</p>
				</div>
			</div>
			<div className="repo__col--2">
				<div className="starBtn">
					<Icon
						icon={STAR}
						color={COLORJS.buttonColor}
						stroke={COLORJS.grey}
					></Icon>
					<p>Start</p>
				</div>
				<img src={Line} alt="Activity Line" width="142" height="25" />
			</div>
		</RepositoryStyled>
	);
};

export default Repository;
