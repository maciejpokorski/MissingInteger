const sortArr = (A) => {

    return A.sort((a, b) => a - b);
}

const isPositive = (value) => value > -1

const solution = (A) => {
    let smallestMissingInteger = 1;
    
    const input = sortArr(A);

    for (let index = 0; index < input.length; index++) {
        let currentCheckingValue = input[index];
        if(isPositive(currentCheckingValue) && input[index] === smallestMissingInteger){
            smallestMissingInteger++;
        }
    }

    return smallestMissingInteger;
}

export default solution;