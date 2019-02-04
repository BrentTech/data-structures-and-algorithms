# Hashtables

## Challenge 1 - Repeated Word.
Write a function that takes in a lengthy string and returns the first repeated word in that string.

## Approach & Efficiency
Our approach was to build a hashtable and add each word to that table as we iterated over the array of words in the string. Prior to adding a word to the hashtable we would check to see if it already existed, and if it did we would return that word.

We believe the efficiency to be O(n^2), especially if it is a bad hash function. However, there are some questions to how we could get this down to 0(n) efficiency.

### Solution
![Whiteboard Image of Linked List Merge](../assets/repeated_word.jpg "Solution to Code Challenge - Linked List Merge")