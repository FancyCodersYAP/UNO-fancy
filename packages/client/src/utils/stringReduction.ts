export default (string: string, maxLength: number) =>
  string.length > maxLength ? string.slice(0, maxLength - 1).trim() + `...` : string;
  