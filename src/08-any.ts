(() => {
  let myDynamicVar: any;
  myDynamicVar = 2
  myDynamicVar = null
  myDynamicVar = {}
  myDynamicVar = "Hello"

  const rta = (myDynamicVar as string).toLowerCase()

  console.log("rta", rta);

  myDynamicVar = 1234.5678
  const rta2 = (<number>myDynamicVar).toFixed(2)

  console.log("rta2", rta2);
})()
