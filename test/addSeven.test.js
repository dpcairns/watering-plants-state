// IMPORT MODULES under test here:
import addSeven from '../addSeven.js';

const test = QUnit.test;

test('it should add seven', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 12;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addSeven(5);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, actual);
});
