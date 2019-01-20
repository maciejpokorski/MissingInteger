import solution from './index.js'

test('[1, 3, 6, 4, 1, 2], 5', () => {
    const input = [1, 3, 6, 4, 1, 2];
    const expectedResult = 5;
    expect(solution(input)).toEqual(expectedResult);
});

test('[1, 2, 3], 4', () => {
    const input = [1, 2, 3];
    const expectedResult = 4;
    expect(solution(input)).toEqual(expectedResult);
});

test('[-1, -3], 1', () => {
    const input = [-1, -3];
    const expectedResult = 1;
    expect(solution(input)).toEqual(expectedResult);
});

test('[25, 1], 2', () => {
    const input = [25, 1];
    const expectedResult = 2;
    expect(solution(input)).toEqual(expectedResult);
});

test('[], 1', () => {
    const input = [];
    const expectedResult = 1;
    expect(solution(input)).toEqual(expectedResult);
});

