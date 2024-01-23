// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
describe('getUser', () => {
    test('Should return a user with the specified ID', () => {
      const result = getUser(3);
      expect(result).toEqual({
        id: 3,
        username: 'goosemotionless',
        email: 'dotmeheart@outlook.com',
        password: '12345abcde',
      });
    });
  
    test('Should return undefined for non-existing user ID', () => {
      const result = getUser(999);
      expect(result).toBeUndefined();
    });
  });
// Verify any data of the resulting object you want

// READ documentation