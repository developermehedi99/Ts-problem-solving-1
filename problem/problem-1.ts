{
    // Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

    function repeatString(a: string, b:number):string{
        return a.repeat(b);
    }

    const result1 = repeatString('IcanInsallah',  3)
    console.log(result1)


    function repeatNumber (param1: string, param2:number): string {
        return param1.repeat(param2);
    }
    console.log(repeatNumber('nurmoni',6))
}