// Luis => [L,u,i,s] => string => string[]
// [L,u,i,s] => Luis => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Luis');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Luis =>', rtaArray);

const rtaStr = parseStr(['L', 'u', 'i', 's']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['L','u','i','s'] =>", rtaStr);
