/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    f = "Hello World"
    return function() {
        return f
    }
};
