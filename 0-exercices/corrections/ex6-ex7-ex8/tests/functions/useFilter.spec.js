import { describe, it, expect } from 'vitest'
import { filterItems } from '@/functions/useFilter'
describe('Testing useFilter', () => {
    it(`
        Should be [{ name: 'A', isBought: true }]
        from [
            { name: 'A', isBought: true },
            { name: 'B', isBought: false }
        ]
        When filter is { isBought: true}
    `, () => {
        const items = [
            { name: 'A', isBought: true },
            { name: 'B', isBought: false }
        ]
        const filterSelected = { isBought: true}
        const result = filterItems(items, filterSelected)
        expect(result).toEqual([{ name: 'A', isBought: true }])
    })

    describe('Several use cases', () => {
        it.each(
            [
                // use case order expected, items, filter(criteria)
                [
                    [{ name: 'A', isBought: true }],
                    [
                        { name: 'A', isBought: true },
                        { name: 'B', isBought: false }
                    ],
                    { isBought: true}
                ],
                [
                    [
                        { name: 'A', section: 'boulangerie' },
                        { name: 'B', section: 'boulangerie' }],
                    [
                        { name: 'A', section: 'boulangerie' },
                        { name: 'D', section: 'toto' },
                        { name: 'B', section: 'boulangerie' },
                        { name: 'F', section: 'momo' },
                        { name: 'G', section: 'nono' },
                    ],
                    { section: 'boulangerie'}
                ],

            ]
        )(`
            Should be %s
            from %s
            When filter is %s
        `, (expected, items, criteria) => {
            const result = filterItems(items, criteria)
            expect(result).toEqual(expected)
        })
    })
})