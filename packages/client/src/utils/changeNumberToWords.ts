export default (value: number) => {
  let stringValue;
  switch (value) {
    case 2:
      stringValue = 'два';
      break;
    case 4:
      stringValue = 'четыре';
      break;
  }

  return stringValue;
};