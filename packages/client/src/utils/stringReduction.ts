export default function stringReduction(string: string, maxLength: number) {
  return string.length > maxLength ? string.slice(0, maxLength - 1).trim() + `...` : string;
};
