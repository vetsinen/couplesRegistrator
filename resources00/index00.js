const HttpErrors = require('./HttpErrors')
const SvTaskEkopost = require('./SvTaskEkopost')

module.exports = {
    en: {
        default: {
            ...require('./en-resources-general'),
            ...require('./en-resources-markup'),
            ...(new HttpErrors().getAllPairs())
        },
        tenant1: {}
    },
    sv: {
        default: {
            ...require('./sv-resources-general'),
            ...require('./sv-resources-markup'),
            ...(new HttpErrors().getAllPairs()),
            ...(new SvTaskEkopost()).manualTranslations
        },
        tenant1: {}
    },
};