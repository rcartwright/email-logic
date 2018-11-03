var { forEach, find, toLower, includes, orderBy } = require('lodash');


function getEmailCharCount(emails) {
    const characters = [];

    forEach(emails, (email) => {
        const lowerCaseEmail = toLower(email.email_address);

        forEach(lowerCaseEmail, (character) => {
            const characterDetail = find(characters, { name: character });
            if (characterDetail !== undefined) {
                characterDetail.occurrences = characterDetail.occurences + 1;
            } else {
                characters.push({
                    name: character,
                    occurrences: 1,
                })
            }
        })
    })
    return characters;
}

function getSuggestedEmails(emailToCheck, allEmails) {
    const suggestedEmails = [];
    const lowerCaseEmailToCheck = toLower(emailToCheck);

    forEach(allEmails, (email) => {
        const emailObject = {
            id: email.id,
            email: email.email_address,
            occurrences: 0,
        };
        const lowerCaseEmail = toLower(email.email_address);

        if (lowerCaseEmail !== lowerCaseEmailToCheck) {
            forEach(lowerCaseEmail, (character) => {
                const characterDetail = includes(lowerCaseEmailToCheck, character);
                if (characterDetail) {
                    emailObject.occurrences = emailObject.occurrences + 1;
                }
            });
            if (emailObject.occurrences > 0) {
                suggestedEmails.push(emailObject);
            }
        }

    });

    return orderBy(suggestedEmails, ['occurrences'], ['desc']);
}



module.exports = { getEmailCharCount, getSuggestedEmails };
