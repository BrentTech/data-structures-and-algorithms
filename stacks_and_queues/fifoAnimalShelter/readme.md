# Queue with Stacks

## Collaborators
Lena E.

## Challenge
Impliment an AnimalShelter class that follows FIFO and inlcudes the enqueue and dequeue methods.

## Approach & Efficiency
Enqueue-
Time: O(1)
Space: O(1)

Dequeue-
Time: O(n)
Space: O(n)

Our approach to this solution involved first looking at the traditional queue we had constructed. We built up from there with conditional logic to allow for a customized experience with a given preference.

We realized part way through that we could accomplish Dequeue() at O(1) if we used two queues. This would trade more space for less time, and likely should be used in future solutions.

## Solution!
[Whiteboard Image of Animal Shelter](../assets/fifo_animal_shelter.jpg "Solution to Code Challenge - Animal Shelter with conditional logic")