export const prepareDataToPieChart = data => {
  const calculatedPurposes = {
    home: 0,
    food: 0,
    sport: 0,
    transport: 0,
    shopping: 0,
    family: 0,
    rest: 0,
    other: 0
  };
  return calculatePurposes(data, calculatedPurposes);
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

function calculatePurposes(data, outputArray) {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      data[i].actionType === "consumption"
        ? incrementPurposeSum(
            data[i].actionPurpose,
            data[i].actionSum,
            outputArray
          )
        : console.log("yess");
    }
    return formConfigArray(outputArray);
  }
}
