export const prepareDataToPieChart = (data, operationType) => {
  const calculatedexpense = {
    home: 0,
    food: 0,
    sport: 0,
    transport: 0,
    shopping: 0,
    family: 0,
    rest: 0,
    other: 0
  };
  const calculatedIncome = {
    salary: 0,
    business: 0,
    premium: 0,
    debt: 0,
    else: 0
  };
  const calculateAll = {
    income: 0,
    expense: 0
  };
  const resultArray =
    operationType === "expense"
      ? calculatedexpense
      : operationType === "income"
      ? calculatedIncome
      : calculateAll;
  return calculatePurposes(data, resultArray, operationType);
};
function formConfigArray(outputArray) {
  const configuratedArray = [];
  for (let key in outputArray) {
    if (outputArray[key])
      configuratedArray.push({
        label: key,
        value: outputArray[key]
      });
  }

  return configuratedArray;
}
function incrementPurposeSum(purpose, moneyAmount, outputArray) {
  outputArray[`${purpose}`] += parseFloat(moneyAmount);
}

function calculatePurposes(data, outputArray, operationType) {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      operationType === "all"
        ? incrementPurposeSum(
            data[i].actionType,
            data[i].actionSum,
            outputArray
          )
        : incrementPurposeSum(
            data[i].actionPurpose,
            data[i].actionSum,
            outputArray
          );
    }
    return formConfigArray(outputArray);
  }
}
