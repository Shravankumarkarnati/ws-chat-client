export const getRandomBoolean = () =>
  Math.floor(Math.random() * Math.floor(10)) % 2;
export const getRandomNumber = (range: number) =>
  Math.floor(Math.random() * Math.floor(range));
