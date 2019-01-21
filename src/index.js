//default sort is alphabetical so after sort we can get for example this output: 1 100 7.
//here number sort implementation
const sortArr : Array<number> = (A : Array<number>) => {

    return A.sort((a, b) => a - b);
}

const isPositive : boolean = (value) => value > -1

const solution : number = (A : Array<number>) => {
    let smallestMissingInteger : number = 1;
    
    const input : Array<number> = sortArr(A);

    for (let index = 0; index < input.length; index++) {
        let currentCheckingValue = input[index];
        if(isPositive(currentCheckingValue) && input[index] === smallestMissingInteger){
            smallestMissingInteger++;
        }
    }

    return smallestMissingInteger;
}

export default solution;