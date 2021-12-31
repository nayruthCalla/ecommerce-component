export const rounded = (numb) => {
  // const numb = subTotal * 0.0975;
  const roundedNum = Math.round((numb + Number.EPSILON) * 100) / 100;
  return roundedNum;
};
