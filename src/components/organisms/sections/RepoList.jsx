import styled from "styled-components";
import { useConnectionContext } from "../../../context/conection.context";
import Repository from "../Repository";

const RepoListStyled = styled.div`
	grid-area: repoList;
	/* border: solid 0.5px green; */
`;

const RepoList = () => {
	const { reposData } = useConnectionContext();

	return (
		<RepoListStyled>
			{reposData.map((repo) => {
				if (repo.name !== "Jeffveloper") {
					return <Repository key={repo.id} reposData={repo} />;
				}
			})}
		</RepoListStyled>
	);
};

export default RepoList;
