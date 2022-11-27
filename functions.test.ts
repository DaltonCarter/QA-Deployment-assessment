const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Return an array of equal length', () => {
        let testArr = shuffleArray([1, 2, 3, 4, 5])
        expect(testArr).toHaveLength(5)

    })

    test('should return array with the same info that was put in', () => {
        let testArr = shuffleArray([1, 2, 3, 4, 5])
        expect(testArr).toContain(1)
        expect(testArr).toContain(2)
        expect(testArr).toContain(3)
        expect(testArr).toContain(4)
        expect(testArr).toContain(5)

    })
})