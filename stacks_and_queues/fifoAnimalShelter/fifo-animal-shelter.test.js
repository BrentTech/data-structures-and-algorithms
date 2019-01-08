'use strict';

const Shelter = require('./fifo-animal-shelter.js');

describe('Animal Shelter', () => {
  describe('Animal Class', () => {
    it('should allow cats or dogs', () => {
      let animalShelter = new Shelter();
      animalShelter.enqueue('cat');
      expect(animalShelter.front).toBeTruthy();
    });
    it('should not allow other types of animals', () => {
      let animalShelter = new Shelter();
      expect(() => {animalShelter.enqueue('dragon');}).toThrow('We do not allow that animal');
    });
  });

  describe('Enqueue', () => {
    it('should place a new animal at hte back of the line for adoption', () => {
      let animalShelter = new Shelter();
      animalShelter.enqueue('cat');
      expect(animalShelter.rear.animal).toEqual('cat');
      animalShelter.enqueue('dog');
      expect(animalShelter.rear.animal).toEqual('dog');
      animalShelter.enqueue('cat');
      expect(animalShelter.rear.animal).toEqual('cat');
    });
  });
});