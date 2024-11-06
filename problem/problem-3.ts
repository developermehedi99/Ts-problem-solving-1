{
    // Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

    const filterEvenNumbers = (evensNums: number[]) => {
        const evenN = evensNums.filter(num => num % 2 === 0);
        return evenN;
    }
    const evenResult = filterEvenNumbers([23,45,94,4,3,9,6,88,92,46,182,200,239]);
    console.log(evenResult);

    // 
}