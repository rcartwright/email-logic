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

    const testData2 = [
        {
            id: 1,
            email_address: 'MickeyMouse@fakeEmail.com',
        },
        {
            id: 2,
            email_address: 'MickeyMouse123@fakeEmail.com',
        },
        {
            id: 3,
            email_address: 'Mouse123@fakeEmail.com',
        },
        {
            id: 4,
            email_address: 'DaffyDuck@fakeEmail.com',
        },
        {
            id: 5,
            email_address: 'DonaldDuck@fakeEmail.com',
        },
        {
            id: 6,
            email_address: 'MinnieMouse@fakeEmail.com',
        },
        {
            id: 7,
            email_address: 'Goofy@fakeEmail.com',
        },
        {
            id: 8,
            email_address: 'Pluto@fakeEmail.com',
        },
    ];

    it('should show correct amount of occurrences', function () {
        const data = Helpers.getEmailCharCount(testData);

        const objectOfM = find(data, { name: 'm' });
        const objectOfD = find(data, { name: 'd' });
        const objectOfAt = find(data, { name: '@' });

        expect(objectOfM.occurrences).to.equal(16);
        expect(objectOfD.occurrences).to.equal(5);
        expect(objectOfAt.occurrences).to.equal(6);
    });

    it('should show suggested emails for getSuggestedEmails function', function () {
        const emailToCheck = "MickeyMouse@fakeEmail.com";
        const data = Helpers.getSuggestedEmails(emailToCheck, testData2);

        console.log(data);
    });
});