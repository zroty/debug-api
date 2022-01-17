const {simpleDebug, debug_onConsole, debug_async} = require('./index')
function test_1() {
    console.log(simpleDebug({debugType: "error", outputDebug: 'Its a error message with a simpleDebug function.'}))
    console.log(simpleDebug({debugType: "warning", outputDebug: 'Its a warning message with a simpleDebug function.'}));
    console.log(simpleDebug({debugType: "info", outputDebug: 'Its a info message with a simpleDebug function. '}));

}
function test_2() {

    debug_async({debugType: "error", outputDebug: "Its a error message with a debug_async function."}).then((data) => {
        console.log(data)
    })

    debug_async({debugType: "warning", outputDebug: "Its a warning message with a debug_async function."}).then((data) => {
        console.log(data)
    })

    debug_async({debugType: "info", outputDebug: "Its a info message with a debug_async function."}).then((data) => {
        console.log(data)
    })
}

function test_3() {
    debug_onConsole({debugType: "error", outputDebug: "Its a error message with a debug_onConsole function."});
    debug_onConsole({debugType: "warning", outputDebug: "Its a warning message with a debug_onConsole function."});
    debug_onConsole({debugType: "info", outputDebug: "Its a info message with a debug_onConsole function."});
}


test_1();
test_2();
test_3();