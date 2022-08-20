(() => {
  // let myNumber: number = undefined
  // let myName: string = null
  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNumber: number | null = null
  myNumber = 64

  let myName: string | undefined = undefined
  myName = "Luis"

  function hi(name: string | null) {
    let greeting = ""
    if (name) {
      greeting = `Hello ${name}`
    } else {
      greeting = "Hello nobody"
    }
    console.log(greeting)
  }
  hi(myName)
  hi(null)
})()
