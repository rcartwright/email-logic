var { forEach, find } = require('lodash');


function getEmailCharCount(emails) {
    const characters = [];

    forEach(emails, (email) => {
        console.log('email', email);
        forEach(email.email_address, (character) => {
            console.log('character', character);
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
