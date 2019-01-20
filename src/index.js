const isUnique = (item, index, array) => array.indexOf(item) == index;

const sortAndUnique = (A) => {
    const uniq = A.filter(isUnique)

    return uniq.sort();
}

const solution = (A) => {
    let smallestMissingInteger = 1;
    
    const input = sortAndUnique(A);

    for (let index = 0; index < input.length; index++) {
        if(input[index] === smallestMissingInteger){
            smallestMissingInteger++;
        }
    }

    return smallestMissingInteger;
}

export default solution;