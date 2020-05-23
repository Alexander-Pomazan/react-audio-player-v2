export const ensureTwoDigits = (digit: number | string): string => {
  const stringifiedDigit = `${digit}`

  if (stringifiedDigit.length >= 2) return stringifiedDigit

  return `0${stringifiedDigit}`
}
