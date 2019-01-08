'use strict';

class Animal {
  constructor(animal) {
    if(animal === 'dog' || animal === 'cat') {
      this.animal = animal;
      this.next = null;
    } else {
      throw 'We do not allow that animal';
    }
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let goodBoye = new Animal(animal);
    if(!this.front && !this.rear) {
      this.front = goodBoye;
      this.rear = goodBoye;
    }
    this.rear.next = goodBoye;
    goodBoye = this.rear;
  }

  dequeue(pref) {
    if (!this.front) {
      throw 'This is amazing! The shelter is empty. K - sorry.';
    }
    let current = this.front;
    let previous = this.front;
    do {
      if(current.value === pref) {
        if(current === this.front) {
          this.front = previous;
        }
        previous.next = current.next;
        return current;
      }
      previous = current;
      current = current.next;
    } while (current);
  }
}

module.exports = AnimalShelter;