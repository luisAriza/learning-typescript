(() => {
  let userId: string | number
  userId = 3
  userId = "3"

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log("greeting", myText.toLowerCase());
    } else {
      console.log("greeting", myText.toFixed(1));
    }
  }
  greeting("Hello, world!")
  greeting(43.12)
})()
