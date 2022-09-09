import styled from "styled-components";

const BadgeStyled = styled.div`
	.repo__visibility {
		color: var(--grey);
		font: var(--caption-regular);
		border: solid 1px var(--grey);
		display: inline;
		padding: 2px 8px;
		border-radius: 8px;
		margin: 0;
	}
`;

const Badge = ({ visibility }) => {
	return (
		<BadgeStyled>
			<p className="repo__visibility">{visibility}</p>
		</BadgeStyled>
	);
};

export default Badge;
