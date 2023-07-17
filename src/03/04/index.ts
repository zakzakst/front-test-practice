export const add = (a: number, b: number) => {
  const sum = a + b
  if (sum > 100) {
    return 100
  }
  return sum
}

export const sub = (a: number, b: number) => {
  const sub = a - b
  if (sub < 0) {
    return 0
  }
  return sub
}
