export const greetByTime = () => {
  const hour = new Date().getHours()
  if (hour < 12) {
    return 'おはよう'
  } else if (hour < 18) {
    return 'こんにちは'
  } else {
    return 'こんばんは'
  }
}