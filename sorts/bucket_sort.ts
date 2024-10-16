// Import the prompt-sync package
const prompt = require('prompt-sync')();

// Function to sort individual buckets using insertion sort
function insertionSort(bucket: number[]): number[] {
    for (let i = 1; i < bucket.length; i++) {
        let key = bucket[i];
        let j = i - 1;
        while (j >= 0 && bucket[j] > key) {
            bucket[j + 1] = bucket[j];
            j--;
        }
        bucket[j + 1] = key;
    }
    return bucket;
}

// Function to sort arr[] using bucket sort
function bucketSort(arr: number[]): number[] {
    const n = arr.length;

    // 1) Create n empty buckets
    let buckets: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        buckets[i] = [];
    }

    // 2) Put array elements in different buckets
    for (let i = 0; i < n; i++) {
        const bi = Math.floor(n * arr[i]);  // Index in the bucket array
        buckets[bi].push(arr[i]);
    }

    // 3) Sort individual buckets using insertion sort
    for (let i = 0; i < n; i++) {
        buckets[i] = insertionSort(buckets[i]);
    }

    // 4) Concatenate all buckets into the original array
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            arr[index++] = buckets[i][j];
        }
    }

    return arr;
}

// Function to get user input and handle sorting
function main() {
    // Take the number of elements from the user
    const n = parseInt(prompt('Enter the number of elements: '));

    // Initialize an array and take user input for each element
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
        const element = parseFloat(prompt(`Enter element ${i + 1}: `));
        arr.push(element);
    }

    // Sort the array using bucket sort
    const sortedArr = bucketSort(arr);

    // Print the sorted array
    console.log('Sorted array is:', sortedArr);
}

// Run the main function to start the program
main();
