import styled from "styled-components";

const TechTagStyled = styled.div`
	.tag {
		font: var(--caption-medium);
		color: var(--primary);
		margin: 0;
		background-color: rgba(56, 139, 253, 0.15);
		padding: 6px 12px;
		border-radius: 38px;
		text-decoration: none;
	}
	.tag:hover {
		background-color: #1f6feb;
		color: var(--white);
	}
`;

const TechTag = ({ tech }) => {
	return (
		<TechTagStyled>
			<a
				href={"https://github.com/topics/" + tech}
				target="_blank"
				className="tag"
			>
				{tech}
			</a>
		</TechTagStyled>
	);
};

export default TechTag;
