import { greet } from './greet'

// jest.mockをテストファイル冒頭で実行すると、対象モジュールの置き換え準備が実施される
// ※本来の結果と異なりundefinedを返している
jest.mock('./greet')

test('挨拶を返さない（本来の実装ではない）', () => {
  expect(greet('Taro')).toBe(undefined)
})