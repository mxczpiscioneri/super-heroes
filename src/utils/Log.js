export const Log = (message, info) => {
  console.log(message, info) // eslint-disable-line no-console
}

export const LogError = (message, error) => {
  console.error(message, JSON.stringify(error)) // eslint-disable-line no-console
}
