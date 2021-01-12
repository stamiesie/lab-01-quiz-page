import { countsAsAYes } from '../counts-as-a-yes.js';


const test = QUnit.test;

test('should return true if given a answer that starts with Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('Yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return false if given an answer if does not start with Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('No');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});