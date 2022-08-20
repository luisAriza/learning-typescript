let anyVar: any;
anyVar = true
anyVar = []
anyVar = "Hello"
anyVar = null
anyVar = undefined

// No hay error. Esto no debería pasar
let isNew: boolean = anyVar;

let unknownVar: unknown;
unknownVar = true
unknownVar = undefined
unknownVar = []
unknownVar = null
unknownVar = "Hello"

// isNew = unknownVar;

typeof unknownVar === "string"
  ? console.log("unknownVar", unknownVar.toUpperCase())
  : console.log("type of unknownVar is ", typeof unknownVar)

const parse = (str: string): unknown => JSON.parse(str)
