export const adaptCompareData = data => {};
const sortDataByDate = data => {
  const dataDump = [...data];
  dataDump.sort((a, b) => {
    if (a.dateMilliseconds > b.dateMilliseconds) {
      return 1;
    }
    return -1;
  });
  return dataDump;
};
