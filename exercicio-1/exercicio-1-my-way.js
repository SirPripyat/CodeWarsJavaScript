function createPhoneNumber(numbers) {
  const ddi = createDdi(numbers);
  const threeFirstNumbers = createThreeFirstNumbersOnPhone(numbers);
  const fourtLastNumbers = createFourtLastNumbersOnPhone(numbers);

  return ddi + threeFirstNumbers + fourtLastNumbers;
}

const getDdiNumbers = (numbers) => numbers.splice(0, 3).join("");

function createDdi(numbers) {
  const ddiNumbers = getDdiNumbers(numbers);

  return `(${ddiNumbers}) `;
}

const getThreeFirstNumbers = (numbers) => numbers.splice(0, 3).join("");

function createThreeFirstNumbersOnPhone(numbers) {
  const threeFirstNumbers = getThreeFirstNumbers(numbers);

  return `${threeFirstNumbers}-`;
}

const getFourtLastNumbers = (numbers) =>
  numbers.splice(0, numbers.length).join("");

function createFourtLastNumbersOnPhone(numbers) {
  const fourtLastNumbers = getFourtLastNumbers(numbers);

  return fourtLastNumbers;
}
