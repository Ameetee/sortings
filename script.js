function insertionSort(arr) {
    const length = arr.length;
    
    for (let i = 1; i < length; i++) {
        let current = arr[i]; // Element to be compared and inserted
        let j = i - 1; // Start comparing with the previous element

        // Move elements of arr[0..i-1], that are greater than current, one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element at its correct position in sorted array
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original Array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
