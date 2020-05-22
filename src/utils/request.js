const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const msg = `status:${response.status},statusText:${response.statusText},url:${response.url}`
  const error = new Error(msg)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 * @param url The URL we want to request
 * @param options The options we want to pass to "fetch"
 * @returns {Promise<any>} An object containing either "data" or "err"
 */
export const request = async (url, options) => {
  if (options && options.body) {
    const data = options.body
    const formData = new FormData()
    Object.getOwnPropertyNames(data).forEach(key => {
      if (data[key]) formData.append(key, data[key])
    })
    options.body = formData
  }

  console.log('request options', options)
  const response = await fetch(url, options)

  checkStatus(response)

  const result = await response.json()
  console.log('response result: ', result)

  return result
}

// 'Content-Type': 'application/json;charset=utf-8',
// 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
