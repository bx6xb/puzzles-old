export const timeFormatter = (timeInSeconds: number) => {
  if (timeInSeconds < 60) {
    return timeInSeconds + "s"
  }
  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = Math.floor(timeInSeconds % 60)

  return `${minutes}:${seconds < 9 ? "0" + seconds : seconds}`
}
