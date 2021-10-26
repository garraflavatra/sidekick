export interface Coordinates {
	x: number;
	y: number;
	width: number;
	height: number;
}

export function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		x: rect.left + window.scrollX,
		y: rect.top + document.documentElement.scrollTop
	};
}
