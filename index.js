function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function name() {
        console.log('Nick');
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(9 + 3);
    }
}