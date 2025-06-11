function validateUnionType(value: any, allowedTypes: string[]): boolean {
  if (value === null && allowedTypes.includes("null")) {
    return true;
  }

  const valueType = typeof value;
  return allowedTypes.includes(valueType);
}


const a = 123;
const b = "Bonjour";
const c = true;
const d = null;
const e = { name: "Alice" };

console.log(validateUnionType(a, ["string", "number"]));  // true
console.log(validateUnionType(b, ["boolean"]));           // false
console.log(validateUnionType(c, ["boolean"]));           // true
console.log(validateUnionType(d, ["null"]));              // true
console.log(validateUnionType(e, ["object"]));            // true
