import PropTypes from "prop-types";
import { Icon as IconClass } from "../icon/icon.class";

const Icon = ({ icon, size, color }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox={icon.vb}
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
		>
			{icon && icon.code}
		</svg>
	);
};

Icon.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	icon: PropTypes.shape({
		vb: PropTypes.string.isRequired,
		code: PropTypes.node.isRequired,
	}).isRequired,
};

Icon.defaultProps = {
	size: "24px",
	color: "currentColor",
};

export default Icon;
