import { checkConfig } from './checkConfig'

test('モック関数は実行時引数のオブジェクト検証ができる', () => {
  const mockFn = jest.fn()
  checkConfig(mockFn)
  expect(mockFn).toHaveBeenLastCalledWith({
    mock: true,
    feature: { spy: true },
  })
})

test('expect.objectContaining による部分検証', () => {
  const mockFn = jest.fn()
  checkConfig(mockFn)
  expect(mockFn).toHaveBeenLastCalledWith(
    expect.objectContaining({
      feature: { spy: true },
    })
  )
})