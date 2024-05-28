export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const createRandomNumberArray = (min: number, max: number, length: number): number[] => {
  const arr: number[] = []

  while (arr.length !== length) {
    const randomNumber = getRandomNumber(min, max)
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber)
    }
  }
  return arr
}
