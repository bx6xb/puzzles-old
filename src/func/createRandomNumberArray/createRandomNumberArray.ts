export const createRandomNumberArray = (
  min: number,
  max: number,
  length: number
): number[] => {
  const arr: number[] = []

  while (arr.length !== length) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber)
    }
  }
  return arr
}
