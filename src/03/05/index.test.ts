import { RangeError, add, sub } from './index'

// test('例外がスローされる', () => {
//   expect(() => add(-10, 110)).toThrow()
// })

// test('例外がスローされないため失敗する', () => {
//   expect(() => add(70, 80)).toThrow()
// })

describe('四則演算', () => {
  describe('add', () => {
    test('返り値は、第一引数と第二引数の「和」である', () => {
      expect(add(50, 50)).toBe(100)
    })

    test('返り値の上限は、100である', () => {
      expect(add(70, 80)).toBe(100)
    })

    test('引数が0〜100の範囲外だった場合、例外をスローする', () => {
      const message = '入力値は0〜100の間で入力してください'
      expect(() => add(-10, 10)).toThrow(message)
      expect(() => add(10, -10)).toThrow(message)
      expect(() => add(-10, 110)).toThrow(message)
    })
  })

  describe('sub', () => {
    test('返り値は、第一引数と第二引数の「差」である', () => {
      expect(sub(51, 50)).toBe(1)
    })

    test('返り値の下限は、0である', () => {
      expect(sub(70, 80)).toBe(0)
    })

    test('引数が0〜100の範囲外だった場合、例外をスローする', () => {
      expect(() => add(-10, 10)).toThrow(RangeError)
      expect(() => add(10, -10)).toThrow(RangeError)
      expect(() => add(-10, 110)).toThrow(Error)
    })
  })
})