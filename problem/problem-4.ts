{
    // Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

    function reverseArray <T>(paramReverse:T[]):T[]{
        return paramReverse.reverse();
    }
    const result4 = reverseArray(['rana','nurmoni','usaailla','unknow'])
    console.log(result4)


    // 
}