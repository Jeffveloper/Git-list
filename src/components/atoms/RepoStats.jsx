import styled from "styled-components";
import { getTechColors } from "../../helpers/technologies.helper";
import { timeSince } from "../../helpers/timeTrans.helper";
import { BRANCH } from "../icon/B_icon";
import { STAR } from "../icon/S_icon";
import IconwText from "../molecules/IconwText";
import { COLORJS } from "../settings/Colors";
import Icon from "./Icon";

const RepoStatsStyled = styled.div`
	display: flex;
	gap: 16px;
	color: var(--grey);
	font: var(--caption-regular);
`;

const RepoStats = ({ repo }) => {
	const { language } = repo;
	let { forks_count, stargazers_count, updated_at } = repo;

	// random stars, forks
	stargazers_count = +Math.floor(Math.random() * 25);
	forks_count = +Math.floor(Math.random() * 5);

	// tech color
	const techColor = getTechColors(language);

	// updated at
	const date = timeSince(updated_at);

	return (
		<RepoStatsStyled>
			<IconwText content={language}>
				<div className="color" style={{ background: techColor }} />
			</IconwText>
			<IconwText content={stargazers_count}>
				<Icon
					icon={STAR}
					color={COLORJS.transparent}
					stroke={COLORJS.grey}
				></Icon>
			</IconwText>
			<IconwText content={forks_count}>
				<Icon
					icon={BRANCH}
					color={COLORJS.transparent}
					stroke={COLORJS.grey}
				></Icon>
			</IconwText>
			<p>{date}</p>
		</RepoStatsStyled>
	);
};

export default RepoStats;
