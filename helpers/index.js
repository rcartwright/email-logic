var { forEach, find, toLower, includes, orderBy } = require('lodash');


function getEmailCharCount(emails) {
    const characters = [];

    forEach(emails, (email) => {
        const lowerCaseEmail = toLower(email.email_address);

        forEach(lowerCaseEmail, (character) => {
            const characterDetail = find(characters, { name: character });
            if (characterDetail !== undefined) {
                characterDetail.occurrences = characterDetail.occurrences + 1;
            } else {
                characters.push({
                    name: character,
                    occurrences: 1,
                })
            }
        })
    })
    return orderBy(characters, ['occurrences'], ['desc']);
}

function transformEmail(email) {
    const fullEmail = toLower(email);

    const local = fullEmail.split("@")[0];
    const domain = fullEmail.split("@")[1];
    return { local, domain, fullEmail };
}

function getSuggestedEmails(emailToCheck, allEmails) {
    const suggestedEmails = [];
    const transformedEmailToCheck = transformEmail(emailToCheck);

    forEach(allEmails, (email) => {
        const emailObject = {
            id: email.id,
            email: email.email_address,
            weight: 0,
        };
        const transformedEmail = transformEmail(email.email_address);

        if (transformedEmail.fullEmail !== transformedEmailToCheck.fullEmail) {
            forEach(transformedEmail.local, (character) => {
                const characterDetail = includes(transformedEmailToCheck.local, character);
                if (characterDetail) {
                    emailObject.weight = emailObject.weight + 1;
                }
            });

            if (transformedEmail.domain == transformedEmailToCheck.domain) {
                emailObject.weight = emailObject.weight + 1;
            }

            if (emailObject.weight > 0) {
                suggestedEmails.push(emailObject);
            }
        }
    });

    return orderBy(suggestedEmails, ['weight'], ['desc']);
}



module.exports = { getEmailCharCount, getSuggestedEmails };
