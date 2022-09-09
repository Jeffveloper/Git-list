import styled from "styled-components";
import Badge from "../atoms/Badge";

const RepoContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	.repo__head {
		display: flex;
		gap: 16px;
		height: auto;
	}
	.repo__title {
		color: var(--primary);
		font: var(--headline2-semi-bold);
		margin: 0;
		text-decoration: none;
	}
	.repo__title:hover {
		text-decoration: underline;
	}

	/* repo desc */
	.repo__desc {
		font: var(--body2-regular);
		color: var(--grey);
		margin: 0;
	}
	@media (min-width: 1024px) {
		.repo__desc {
			max-width: 70%;
		}
	}
`;

const RepoContent = ({ repos }) => {
	const { name, description, visibility, svn_url } = repos;
	return (
		<RepoContentStyled>
			<div className="repo__head">
				<a href={svn_url} target="blank" className="repo__title">
					{name}
				</a>
				<Badge visibility={visibility} />
			</div>
			<p className="repo__desc">{description}</p>
		</RepoContentStyled>
	);
};

export default RepoContent;
