/** 
 * @function bubbleSort 
 * @description Bubble sort algorithm is simple and easy. In bubble sort every pair of adjacent value is compared and swap if the first value is greater than the second one. By this with every iteration the greatest value goes to the right side making itascending order.
 * @Complexity_Analysis 
 * Space complexity - O(1) 
 * Time complexity  
 *      Best case   -   O(n) 
 *      Worst case  -   O(n^2) 
 *      Average case -  O(n^2)
 *
 * @param {number[]} arr - The input array 
 * @return {number[]} - The sorted array. 
 * @see [Bubble Sort](https://www.freecodecamp.org/news/bubble-sort) 
 * @example bubbleSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8] 
 */

export const bubbleSort =(arr:number[]):number[] =>{

 for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length-1;j++){
      if(arr[j]>arr[j+1]){
        let temp:number =arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
   }
}
  return arr;
}
