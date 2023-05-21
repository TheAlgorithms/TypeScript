/**
 * @function CycleSort
 * @description Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array, unlike any other in-place sorting algorithm. It is based on the idea that the permutation to be sorted can be factored into cycles, which can individually be rotated to give a sorted result.
 * @param {number[]}array - The input array
 * @return {number[]} - The sorted array.
 * @see [CycleSort] https://en.wikipedia.org/wiki/Cycle_sort
 * @example cycleSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */
  
export const cycleSort = (array: number[]) => {
  for (let index: number = 0; index < array.length - 1; index++) {
      MoveCycle(array, index);
  }  
  return array;
};

function MoveCycle(array: number[], startIndex: number) : void {
    
    let currentItem: number = array[startIndex];
    let nextPositionChange: number = startIndex + CountSmallerElements(array, startIndex);
    if(nextPositionChange == startIndex)
    {
        return;
    }

    nextPositionChange = OffsetSameElements(array, nextPositionChange, currentItem);

    let tmp: number = array[nextPositionChange];
    array[nextPositionChange] = currentItem;
    currentItem = tmp;

    while (nextPositionChange != startIndex)
    {
        nextPositionChange = startIndex + CountSmallerElements(array, startIndex);
        nextPositionChange = OffsetSameElements(array, nextPositionChange, currentItem);

        tmp = array[nextPositionChange];
        array[nextPositionChange] = currentItem;
        currentItem = tmp;
    }
}

function CountSmallerElements(array: number[], startIndex: number) : number{
    let smallerElementsCount: number = 0;

    for (let index: number = startIndex + 1; index < array.length; index++) {
        if(array[startIndex] > array[index])
        {
            smallerElementsCount++;
        }
    }

    return smallerElementsCount;
}

function OffsetSameElements(array: number[], currentPosition: number, currentItem: number): number {    
    while (array[currentPosition] == currentItem) {
        currentPosition++;
    }

    return currentPosition;
}

