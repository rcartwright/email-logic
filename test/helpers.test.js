const chai = require('chai');
const { find } = require('lodash');
const Helpers = require('../helpers');

const expect = chai.expect;


describe.only('Helpers', function () {
    const testData = [
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
            email_address: 'MickeyM@fakeEmail.com',
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
        {
            id: 9,
            email_address: 'MickeyMouse123@differentDomain.com',
        },
        {
            id: 10,
            email_address: 'Mouse123@fakeEmail.com',
        },
    ];

    it('should show correct amount of occurrences', function () {
        const data = Helpers.getEmailCharCount(testData);

        const objectOfM = find(data, { name: 'm' });
        const objectOfD = find(data, { name: 'd' });
        const objectOfAt = find(data, { name: '@' });

        expect(objectOfM.occurrences).to.equal(31);
        expect(objectOfD.occurrences).to.equal(7);
        expect(objectOfAt.occurrences).to.equal(10);
    });

    it('should show character frequency count from highest to lowest', function () {
        const data = Helpers.getEmailCharCount(testData);

        expect(data[0].name).to.equal('m');
        expect(data[1].name).to.equal('e');
        expect(data[2].name).to.equal('a');
        expect(data[3].name).to.equal('o');
        expect(data[4].name).to.equal('i');
    });

    it('should show suggested emails & in correct order for getSuggestedEmails function', function () {
        const emailToCheck = "MickeyMouse@fakeEmail.com";
        const data = Helpers.getSuggestedEmails(emailToCheck, testData);

        expect(data[0].email).to.equal('MickeyMouse123@fakeEmail.com');
        expect(data[0].id).to.equal(2);

        expect(data[1].email).to.equal('MickeyMouse123@differentDomain.com');
        expect(data[1].id).to.equal(9);

        expect(data[8].email).to.equal('Pluto@fakeEmail.com');
        expect(data[8].id).to.equal(8);
    });

    it('should not contain original email in the suggested emails', function () {
        const emailToCheck = "MickeyMouse@fakeEmail.com";
        const data = Helpers.getSuggestedEmails(emailToCheck, testData);

        const findOriginalEmail = find(data, { email: emailToCheck });

        expect(findOriginalEmail).to.equal(undefined);
    });
});