export const pluralize = (word: string, count: number, plural?: string) => {
  return count > 1 || count < 1 ? (plural ? plural : `${word}s`) : word
}

export const getLines = (value: number) => Math.floor(value / 10)
export const getParagraphs = (value: number) => Math.floor(value / 50)
export const getPages = (value: number) => Math.floor(value / 250)
