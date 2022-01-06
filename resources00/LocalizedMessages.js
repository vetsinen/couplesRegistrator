const camelCase = require('../index')


/**
 * description this abstract class can't be instanced
 */
class LocalizedMessages { //Abstract class
    prefix
    humanReadableMessages = []
    prefixlessManualTranslations = {}
    manualTranslations = {}

    constructor() {

    }

    getPrefixedPairs() {
        let rez = {}
        for (let el of this.humanReadableMessages) {
            rez[camelCase(this.prefix, el)] = el
        }
        return rez
    }

    setPrefixedPairs() {
        this.manualTranslations = {}
        for (let prop of Object.keys(this.prefixlessManualTranslations)) {
            this.manualTranslations[this.prefix + prop] = this.prefixlessManualTranslations[prop]
        }
    }

    getAllPairs() {
        return {...this.getPrefixedPairs(), ...this.manualTranslations}
    }

}

module.exports = LocalizedMessages