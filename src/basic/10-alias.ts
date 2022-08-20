(() => {
  //Alias
  type UserID = string | number;
  let userId: UserID;

  //Literals types
  type Sizes = "S" | "M" | "L" | "XL"
  let shirtSize: Sizes
  shirtSize = "L"
  shirtSize = "M"
  shirtSize = "S"
  // shirtSize = "xs"

  function greeting(myText: UserID, size: Sizes): void {
    if (typeof myText === "string") {
      console.log(`-greeting: ${myText.toLowerCase()} -size: ${size}`);
    }
  }
  greeting("HELLO, world!", "M");
  greeting(123434, "S");
})()
