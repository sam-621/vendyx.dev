
/**
 * utility function to get a partial path to a file
 * @param path path to file
 * @returns a new partial path to the file
 */
export const getUrl = (path: string) => {
  return `/static/${path}`
}