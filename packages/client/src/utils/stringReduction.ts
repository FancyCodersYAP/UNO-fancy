export default function stringReduction(string: string, maxLength: number) {
  const abbreviatedString = 
  string.length > maxLength
    ? string.slice(0, maxLength - 1).trim() + `...`
    : string;

  return abbreviatedString;
}