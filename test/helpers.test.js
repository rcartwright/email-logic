const chai = require('chai');
const { find } = require('lodash');
const Helpers = require('../helpers');

const expect = chai.expect;


describe('Helpers', function () {
    const testData = [
        {
            email_address: 'MickeyMouse@fakeEmail.com',
        },
        {
            email_address: 'DaffyDuck@fakeEmail.com',
        },
        {
            email_address: 'DonaldDuck@fakeEmail.com',
        },
        {
            email_address: 'MinnieMouse@fakeEmail.com',
        },
        {
            email_address: 'Goofy@fakeEmail.com',
        },
        {
            email_address: 'Pluto@fakeEmail.com',
        },
    ];

    it('should show 16 occurences of m', function () {
        const data = Helpers.getEmailCharCount(testData);
        //console.log('data', data);
        const objectOfM = find(data, { name: 'm' });

        expect(objectOfM.occurences).to.equal(16);
    });
});