

let { blue, red, yellow }
                        = require('colors')

let debugTypes = {
    info: {
        color:   blue,
        prefix: 'SUCCESS'
    },
    error: {
        color: red,
        prefix: 'ERROR',
    },
    warning: {
        color: yellow,
        prefix: 'WARNING'
    }
}


function debug(debugType, outputDebug) {
    if (debugType) {
        if (outputDebug) {
            console.log( '[' + debugTypes[debugType].color(debugTypes[debugType]['prefix']) + ']: ' + outputDebug);
        } else {
            console.log('No second value, error, or debug value is specified.')
        }
    } else {
        console.log('No debug value specified.')
    }
};


module.exports = debug
