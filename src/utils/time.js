export const sleep = millisecond => {
  let now = new Date()
  console.log('start sleep: ', now)
  let exitTime = now.getTime() + millisecond
  while (true) {
    now = new Date()
    if (now.getTime() > exitTime) {
      console.log('end sleep: ', now)
      return
    }
  }
}

export const delay = millisecond =>
  new Promise(resolve => {
    console.log('start delay: ', new Date())
    setTimeout(f => {
      console.log('end delay: ', new Date())
      resolve(f)
    }, millisecond)
  })
