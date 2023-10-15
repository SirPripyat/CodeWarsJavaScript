String.prototype.camelCase = function () {
  const arrayOfStrings = this;

  if (arrayOfStrings.length === 0) return "";

  return arrayOfStrings.split(" ").map(capitalize).join("");
};

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};
