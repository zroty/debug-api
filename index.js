

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

async function debug_async({debugType = undefined, outputDebug = undefined}) {

    let promise = new Promise((resolve, reject) => {
        if (!debugType) return console.log( '[' + debugTypes[debugType].color(debugTypes['error']['prefix']) + ']: ' + "No debug value specified.");

        if (!outputDebug) return console.log( '[' + debugTypes[debugType].color(debugTypes['error']['prefix']) + ']: ' + "No second value  , error or debug valie is specified.");
    
        resolve( '[' + debugTypes[debugType].color(debugTypes[debugType]['prefix']) + ']: ' + outputDebug);
    
    
    })

    return promise;

} 

function debug_onConsole({debugType = undefined, outputDebug = undefined}) {
    
    if (!debugType) return console.log( '[' + debugTypes[debugType].color(debugTypes['error']['prefix']) + ']: ' + "No debug value specified.");

    if (!outputDebug) return console.log( '[' + debugTypes[debugType].color(debugTypes['error']['prefix']) + ']: ' + "No second value  , error or debug valie is specified.");


    console.log( '[' + debugTypes[debugType].color(debugTypes[debugType]['prefix']) + ']: ' + outputDebug);

}

function simpleDebug({debugType = undefined, outputDebug = undefined}) {

    if (!debugType) return console.log( '[' + debugTypes[debugType].color(debugTypes['error']['prefix']) + ']: ' + "No debug value specified.");

    if (!outputDebug) return console.log( '[' + debugTypes[debugType].color(debugTypes['error']['prefix']) + ']: ' + "No second value  , error or debug valie is specified.");

    let _output = "";

    _output ='[' + debugTypes[debugType].color(debugTypes[debugType]['prefix']) + ']: ' + outputDebug;
    return _output;

}


// debug_async({
//     debugType: "error",
//     outputDebug: "asdasdasdasd"
// }).then((output) => {
//     console.log(output) // async
// });



module.exports = {debug_async, debug_onConsole, simpleDebug}
