# Hashtables

## Challenge 3 - Left Join two Hashtables
Write a function that takes in two hashtables and joins them into one data structure following left join logic. The first hashtable will contain words as keys, and synonyms as values. The second hashtable will contain words as keys, and antonyms as values. The resulting data structure will contain the original work, the synonym, and antonym. If no antonym is present for the word it will contain NULL.

## Approach & Efficiency
* copy first hashtable, if it contains the key from the 2nd hashtable then the coorresponding value is added to the copy of the first hashtable.  If the key does not exist, then we add the value of null to the corrseponding key.  this copy is then returned to complete the task.

### Solution
![Whiteboard Image of Left Join of two Hasttables](../assets/left_join.jpg "Solution to Code Challenge - Left Join")