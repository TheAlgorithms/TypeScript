/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @description : Find kth largest element in an array
 * @see : https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 * @condition : 
 * 1. k < size_of_array
 * @explanation : 
 * 1. Sort in descending order
 * 2. Get the kth largest element
 * 
 */
export const kthLargestElement = (array: number[], k: number) : number => 
    array.sort((a, b) => b - a)[k - 1]

  
  
