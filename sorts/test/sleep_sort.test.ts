import { sleepSort } from "../sleep_sort";

const testCases = [
  [
    [3, 0, 2, 5, 4, 1],
    [0, 1, 2, 3, 4, 5],
  ],
  [
    [6, 4, 2, 1, 3, 5],
    [1, 2, 3, 4, 5, 6],
  ],
  [
    [11, 14, 12, 15, 16, 13],
    [11, 12, 13, 14, 15, 16],
  ],
  [
    [13, 18, 2, 15, 43, 11],
    [2, 11, 13, 15, 18, 43],
  ],
  [
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5]
  ],
  [
    [3,0,1],
    [0,1,3]
  ],
  [
    [],
    []
  ]
];

it.each(testCases)(
  'The sleepingSort of the array %p is %p',
  (input, expected) => {
    sleepSort(input).then((res) => expect(res).toEqual(expected));
  }
);
