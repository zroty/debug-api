let { blue, red, yellow }
                        = require('colors')

let debugTypes = {
    info: {
        color:   blue
    },
    error: {
        color: red,
    },
    warning: {
        color: yellow,
    }
}


function debug(debugType, outputDebug) {
    if (debugType) {
        if (outputDebug) {
            console.log(debugTypes[debugType].color(outputDebug));
        } else {
            console.log('No second value, error, or debug value is specified.')
        }
    } else {
        console.log('No debug value specified.')
    }
};

module.exports.add = debug
