const sortArr = (A) => {

    return A.sort((a, b) => a - b);
}

const solution = (A) => {
    let smallestMissingInteger = 1;
    
    const input = sortArr(A);

    for (let index = 0; index < input.length; index++) {
      if(input[index] > -1 && input[index] === smallestMissingInteger){
          smallestMissingInteger++;
      }
    }

    return smallestMissingInteger;
}

export default solution;