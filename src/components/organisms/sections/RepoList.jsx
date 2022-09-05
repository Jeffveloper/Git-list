import styled from "styled-components";
import Repository from "../Repository";

const RepoListStyled = styled.div`
	grid-area: repoList;
	/* border: solid 0.5px green; */
`;

const RepoList = () => {
	return (
		<RepoListStyled>
			<Repository />
			<Repository />
			<Repository />
		</RepoListStyled>
	);
};

export default RepoList;
