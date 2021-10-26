export function getRandomInteger(min = 0, max: number): number {
	return Math.random() * (max - min) + min;
}

export function getRandomBoolean(): boolean {
	if (Math.random() > 0.4) return true;
	return false;
}
