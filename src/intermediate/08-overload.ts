// Luis => [L,u,i,s] => string => string[]
// [L,u,i,s] => Luis => string[] => string

// type customType = string | string[];
type customType = unknown;

function parseStr(arg: string): string[]
function parseStr(arg: string[]): string

function parseStr(input: customType): customType {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Luis');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Luis =>', rtaArray);

const rtaStr = parseStr(['L', 'u', 'i', 's']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['L','u','i','s'] =>", rtaStr);
