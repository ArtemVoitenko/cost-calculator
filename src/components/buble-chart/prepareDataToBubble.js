export const prepareDataToBubble = data => {
  const spheres = {
    home: 0,
    food: 0,
    sport: 0,
    transport: 0,
    shopping: 0,
    family: 0,
    rest: 0,
    other: 0,
    salary: 0,
    business: 0,
    premium: 0,
    debt: 0,
    else: 0
  };
  return calculatePurposes(data, spheres);
};

function incrementPurposeSum(purpose, moneyAmount, outputArray) {
  outputArray[`${purpose}`] += parseFloat(moneyAmount);
}
function formConfigArray(outputArray) {
  const configuratedArray = [];
  console.log(outputArray);
  for (let key in outputArray) {
    if (outputArray[key])
      configuratedArray.push({
        label: key,
        value: outputArray[key]
      });
  }

  return configuratedArray;
}
function calculatePurposes(data, outputArray) {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      incrementPurposeSum(
        data[i].actionPurpose,
        data[i].actionSum,
        outputArray
      );
    }
    return formConfigArray(outputArray);
  }
}
