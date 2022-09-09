// compos
import styled from "styled-components";
import Icon from "../atoms/Icon";
// icons
import { STAR } from "../icon/S_icon";
import { COLORJS } from "../settings/Colors";
// img
import RepoContent from "../molecules/RepoContent";
import TechTag from "../atoms/TechTag";
import RepoStats from "../atoms/RepoStats";
import BadgeBtn from "../molecules/BadgeBtn";
import GRAPH from "../../constants/Graph.constant";

const RepositoryStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-block-end: 32px;
	margin-block-end: 32px;
	border-block-end: solid 0.5px var(--borderBtn);
	box-sizing: border-box;

	.repo__col--1 {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	/* tags */
	.repo_tags {
		display: flex;
		gap: 5px;

		max-width: 100%;
		flex-wrap: wrap;
	}
	/* repo__stats */

	/* -------------------- */
	.repo__col--2 {
		display: flex;
		flex-direction: row;
		gap: 16px;
		justify-content: space-between;
	}

	@media (min-width: 1024px) {
		/* display: grid;
		grid-template-columns: 60% 40%; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;

		.repo__col--2,
		.repo__col--1 {
			flex-wrap: wrap;
		}
		.repo__col--2 {
			flex-direction: column;
			align-items: flex-end;
			gap: 48px;
			align-self: flex-start;
		}
	}
`;

const Repository = ({ reposData }) => {
	// context
	const { topics } = reposData;
	// activity line
	const activityLine = GRAPH[Math.floor(Math.random() * GRAPH.length)];

	return (
		<RepositoryStyled>
			<div className="repo__col--1">
				<RepoContent repos={reposData} />
				<div className="repo_tags">
					{topics.map((tech) => {
						return <TechTag key={tech} tech={tech} />;
					})}
				</div>
				<RepoStats repo={reposData} />
			</div>
			<div className="repo__col--2">
				<BadgeBtn content="Star">
					<Icon
						icon={STAR}
						color={COLORJS.transparent}
						stroke={COLORJS.grey}
						size={20}
					></Icon>
				</BadgeBtn>
				<img src={activityLine} alt="Activity Line" width="142" height="25" />
			</div>
		</RepositoryStyled>
	);
};

export default Repository;
