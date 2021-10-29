export function getRandomFloat(min = 0, max: number): number {
	return Math.random() * (max - min) + min;
}

export function getRandomInteger(min = 0, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBoolean(): boolean {
	if (Math.random() > 0.4) return true;
	return false;
}
