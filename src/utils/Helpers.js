/**
 * Method to generate url image
 * @param {String} path - Path of image
 * @param {String} extension - Extension of image
 * @param {String} size - Size of image
 * @returns {String} Url image
 */
export const generateUrlImage = (path, extension, size) => {
  const url = path
  url.replace('http://', 'https://')
  return `${url}/${size}.${extension}`
}
