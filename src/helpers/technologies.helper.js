import { TECHNOLOGIES_COLORS } from "../constants/technologies.constant";

export const getTechColors = (tech) => {
	if (!tech) return "#fff";

	const techLower = tech.toLowerCase();

	return TECHNOLOGIES_COLORS[techLower];
};
