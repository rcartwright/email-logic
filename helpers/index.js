var { forEach, find, toLower } = require('lodash');


function getEmailCharCount(emails) {
    const characters = [];

    forEach(emails, (email) => {
        const lowerCaseEmail = toLower(email.email_address);

        forEach(lowerCaseEmail, (character) => {
            const characterDetail = find(characters, { name: character });
            if (characterDetail !== undefined) {
                characterDetail.occurences = characterDetail.occurences + 1;
            } else {
                characters.push({
                    name: character,
                    occurences: 1,
                })
            }
        })
    })
    return characters;
}

module.exports = { getEmailCharCount };
