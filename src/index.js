

module.exports = function toReadable (number) {
    var numberToWords = require('num-words');
    return numberToWords(number).replace('and ', '')
}

