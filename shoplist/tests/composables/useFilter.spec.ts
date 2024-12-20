import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFilter } from '@/composables/useFilter'
import type { ArticleType } from '@/types/ArticleType'
describe.only('Testing useFilter()', () => {
  it.each(
    [
      [
        { isBought: true },
        [{ isBought: true }, { isBought: true }],
        [{ isBought : true }, { isBought : true }]
      ],
      [
        { isBought: false }, 
        [{ isBought : false }, { isBought : false }],
        [{ isBought : false }, { isBought : false }]
      ],
      [
        { isBought: false }, 
        [{ isBought : false }, { isBought : true }],
        [{ isBought : false }]
      ],
      [
        { isBought: true },
        [{ isBought: false }],
        [],
      ],
      [
        { isBought: false },
        [{ isBought: true }],
        []
      ],
      [
        {},
        [{ isBought: true }, { isBought: true }, { isBought: false }],
        [{ isBought: true }, { isBought: true }, { isBought: false }]
      ]
    ]
  )('Should have items filtered by %s, from %s',
    async (criteria : ArticleType, items: Array<ArticleType>, expected: Array<ArticleType>
    ) => {
    const { filterItems } = useFilter()
    const result = filterItems(criteria, items)
    expect(result.value).toEqual(expected)
  })
})