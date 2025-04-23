export const calculateTotalStatValue = (statValueList: number[]) => {
  const totalStatvalue = statValueList.reduce(
    (total, value) => total + value,
    0,
  );

  return totalStatvalue;
};

export const calculateMaxStatValue = (statValueList: number[]) => {
  const maxStatValue = Math.max(...statValueList);

  return maxStatValue;
};
