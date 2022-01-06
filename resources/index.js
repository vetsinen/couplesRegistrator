require('./http')
require('./en-general')
require('./sv-general')
require('./taskEkopost')
require('./en-markup')
require('./sv-markup')

const resources = require('./lib')
console.log(JSON.stringify(resources))

module.exports = resources