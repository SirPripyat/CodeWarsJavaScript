const createPhoneNumber = (numbers) => {
  const phoneSize = numbers.length;

  if (phoneSize !== 10) return;

  let phoneMask = "(XXX) XXX-XXXX";

  for (let i = 0; i < phoneSize; i++)
    phoneMask = phoneMask.replace("X", numbers[i]);

  return phoneMask;
};
