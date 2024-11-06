{
    // Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

    const findLargestNumber =(inputNums: number[]):number =>{
        const leargeNum = Math.max(...inputNums);
        return leargeNum;
    }

    const result2 = findLargestNumber([23,45,94,88,92,46,182,200,239]);
    console.log(result2);

    // 
}