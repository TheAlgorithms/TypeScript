const caseConversion = (a: string, z: string) => (str: string) => str.split('').map(c=> (c >= a && c <= z) ? String.fromCharCode(c.charCodeAt(0) ^ 0x20) : c).join('')
export const toLowerCase = caseConversion('A', 'Z')
export const toUpperCase = caseConversion('a', 'z')