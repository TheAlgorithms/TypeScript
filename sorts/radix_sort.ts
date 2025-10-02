/**
 * Radix Sort is a non-comparison integer sorting algorithm that sorts integers
 * by processing individual digits. It sorts by grouping keys by the individual
 * digits which share the same significant position and value.
 *
 * Time Complexity: O(d * (n + b)) where d is the number of digits in the
 * largest number, n is the size of the input, and b is the base (10 for decimal).
 *
 * For more info: https://en.wikipedia.org/wiki/Radix_sort
 */

// A helper function for Radix Sort that uses Counting Sort to sort the elements
// based on a significant digit.
function countingSortForRadix(array: number[], digit: number): number[] {
  const n = array.length;
  const output: number[] = new Array(n).fill(0);
  const count: number[] = new Array(10).fill(0);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    const index = Math.floor(array[i] / digit) % 10;
    count[index]++;
  }

  // Change count[i] so that count[i] now contains the actual
  // position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array. We iterate from the end to make it a stable sort.
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(array[i] / digit) % 10;
    output[count[index] - 1] = array[i];
    count[index]--;
  }

  return output;
}

export function radixSort(array: number[]): number[] {
  if (array.length === 0) {
    return [];
  }

  // Create a copy to avoid modifying the original array (pure function)
  let result = [...array];

  // Find the maximum number to know the number of digits
  const maxNumber = Math.max(...result);

  // Do counting sort for every digit. Note that instead of passing digit
  // number, digit is passed. digit is 10^i where i is current digit number.
  for (let digit = 1; Math.floor(maxNumber / digit) > 0; digit *= 10) {
    result = countingSortForRadix(result, digit);
  }

  return result;
}

// --- Example Usage ---
if (require.main === module) {
  const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
  console.log('Original Array:', unsortedArray);
  const sortedArray = radixSort(unsortedArray);
  console.log('Sorted Array:', sortedArray); // Output: [ 2, 24, 45, 66, 75, 90, 170, 802 ]
}
