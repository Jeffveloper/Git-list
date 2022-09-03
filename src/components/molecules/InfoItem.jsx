import styled from "styled-components";
import PropTypes from "prop-types";
// icon
import Icon from "../atoms/Icon";

const ItemT1Styled = styled.div`
	display: flex;
	align-items: left;
	flex-direction: row;
	gap: 8px;

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
`;

const ItemT1 = ({ icon, children }) => {
	return (
		<ItemT1Styled>
			<Icon icon={icon} />
			{children}
		</ItemT1Styled>
	);
};

ItemT1.propTypes = {
	icon: PropTypes.shape({
		vb: PropTypes.string.isRequired,
		code: PropTypes.node.isRequired,
	}),
	children: PropTypes.node.isRequired,
};

export default ItemT1;
