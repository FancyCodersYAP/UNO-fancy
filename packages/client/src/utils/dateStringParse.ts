export const dateStringParse = (date: string) => {
  return date
    ? `${
        new Date(date).toLocaleDateString() +
        ' ' +
        new Date(date).toLocaleTimeString()
      }`
    : '';
};
