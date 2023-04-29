export default (string: string | null, maxLength: number) => {
  return string
    ? string.length > maxLength
      ? string.slice(0, maxLength - 1).trim() + `...`
      : string
    : '...';
};
