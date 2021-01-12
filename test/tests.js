import { countsAsAYes } from '../counts-as-a-yes.js';

const test = QUnit.test;

test('should return true if given a answer that starts with Y', (expect) => {

    const expected = true;
    const actual = countsAsAYes('Yes');

    expect.equal(actual, expected);
});

test('should return false if given an answer if does not start with Y', (expect) => {

    const expected = false;
    const actual = countsAsAYes('No');

    expect.equal(actual, expected);
});