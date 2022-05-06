export const switchFoodPoisoningRisk = (data: number) => {
  if (data < 0) {
    return -1;
  } else if (data < 55) {
    return 0;
  } else if (data < 71) {
    return 1;
  } else if (data < 86) {
    return 2;
  } else {
    return 3;
  }
};
