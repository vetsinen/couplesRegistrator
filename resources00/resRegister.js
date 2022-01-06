//let {camelCase} = require('../index')
function camelCase(...keys) {
    return keys
        .map((k) => (/[a-z]/.test(k) ? k : k.toLowerCase()))
        .map((k) => k.split(/[^A-Za-z0-9]+/))
        .flat()
        .map((k, i) =>
            i
                ? k.charAt(0).toUpperCase() + k.slice(1)
                : k.charAt(0).toLowerCase() + k.slice(1)
        )
        .join('');
}

const { sentenceCase } = require ("sentence-case");

function register(obj){
    let rez = {}
    for (lang of obj.languages)
    for (namespace of obj.namespaces){
        console.log(lang, namespace)
        let el = obj.pipe
        rez[lang][namespace][el[0]] = el[1]
    }
    return rez
}

function getPrefixedPair(prefix, key) {
    return [camelCase(prefix, key), sentenceCase(key)]
}

function setPrefixedPairs() {
    this.manualTranslations = {}
    for (let prop of Object.keys(this.prefixlessManualTranslations)) {
        this.manualTranslations[this.prefix + prop] = this.prefixlessManualTranslations[prop]
    }
}

module.exports = {
    register,
    camelCase,
    sentenceCase,
    getPrefixedPair,
}

