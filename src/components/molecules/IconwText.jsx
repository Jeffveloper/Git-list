import styled from "styled-components";

const IconwTextStyled = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;

	.content {
		margin: 0;
	}

	.color {
		border-radius: 50%;
		width: 16px;
		height: 16px;
	}

	svg {
		width: 20px;
	}
`;

const IconwText = ({ children, content }) => {
	return (
		<IconwTextStyled>
			{children}
			<p className="content">{content}</p>
		</IconwTextStyled>
	);
};

export default IconwText;
