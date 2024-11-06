{
    // Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

    function logString(params:unknown):void{
        if(typeof params === "string"){
            console.log('this is string')
        } else{
            console.log("error: it's is not a sting");
        }
    }
    logString('hello typescript');
}