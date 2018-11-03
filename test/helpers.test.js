const chai = require('chai');
const { find } = require('lodash');
const Helpers = require('../helpers');

const expect = chai.expect;


describe.only('Helpers', function () {
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

    it('should show correct amount of occurences', function () {
        const data = Helpers.getEmailCharCount(testData);

        const objectOfM = find(data, { name: 'm' });
        const objectOfD = find(data, { name: 'd' });
        const objectOfAt = find(data, { name: '@' });

        expect(objectOfM.occurences).to.equal(16);
        expect(objectOfD.occurences).to.equal(5);
        expect(objectOfAt.occurences).to.equal(6);
    });
});