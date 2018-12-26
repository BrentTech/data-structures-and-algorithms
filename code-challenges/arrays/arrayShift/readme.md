# Insert Value into an Array and shift remaining values
Write a function that takes in an array and a value. Insert that value into the center index of the given array and shift the other array values appropriately. Returning that new array.

## Challenge
Complete this challenge without using native methods to your language.

## Approach & Efficiency
We first approached this problem intending to mutate the array we were given. However, upon further inspection of the assignment we decided not to. We determined the center index of the given array. We looped backwards through the array and reassigned the value of each index to +1 its previous position. After this was complete we reassigned the value of the array at the center index to the value passed into the function.

## Solution
![Whiteboard Image of Insert into an Array solution](./assets/array_shift.jpg "Solution to Code Challenge 02 - Insert a value into an array and shift")
