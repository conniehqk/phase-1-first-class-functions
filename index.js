const f = s => s+2
function receivesAFunction(f) {
    f()
}

function returnsANamedFunction() {
    const myfunc = name => "Hey " + name
    return myfunc
}

function returnsAnAnonymousFunction() {
    return function(name) {
        return "Hey "+name
    }
}