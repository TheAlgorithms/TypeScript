/**
 * @function shuffleArray
 * @description shuffles an array.
 * @param {number[]} arr - array to shuffle
 * @returns {void} - the function does not return anything
*/
export function shuffleArray(arr: number[]) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
