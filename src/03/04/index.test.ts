import { add, sub } from './index'

test('返り値は、第一引数と第二引数の「和」である', () => {
  expect(add(50, 50)).toBe(100)
})

test('返り値の上限は、100である', () => {
  expect(add(70, 80)).toBe(100)
})

test('返り値は、第一引数と第二引数の「差」である', () => {
  expect(sub(51, 50)).toBe(1)
})

test('返り値の下限は、0である', () => {
  expect(sub(70, 80)).toBe(0)
})
