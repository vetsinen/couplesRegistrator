const {sentenceCase} = require("sentence-case");

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

let resources = {
    en: {
        default: {},
        tenant1: {},
    },
    sv: {
        default: {},
        tenant1: {},
    }
}

function register(obj) {
    obj.pipe = obj.pipe || ((el) => sentenceCase(el))
    obj.prefix = obj.prefix || ''
    obj.languages = obj.languages || ['en']
    obj.namespaces = obj.namespaces || ['default']

    for (let lang of obj.languages)
        for (let namespace of obj.namespaces) {
            if (!resources[lang].hasOwnProperty(namespace)) {
                resources[lang][namespace] = {}
            }

            if (Array.isArray(obj.keys)) {
                for (let key of obj.keys) {
                    resources[lang][namespace][camelCase(obj.prefix, key)] =
                        obj.pipe(key)
                }
            } else if (typeof obj.keys === 'object') {
                for (prop in obj.keys) {
                    resources[lang][namespace][camelCase(obj.prefix, prop)] =
                        obj.pipe(obj.keys[prop])
                }
            }
        }
}

module.exports = {register, sentenceCase, camelCase, resources}