function spinWords(string) {
  const changeStringInArray = string.split(" ");

  const spinWords = changeStringInArray.map((word) => {
    if (word.length < 5) return word;

    return word.split("").reverse().join("");
  });

  return spinWords.join(" ");
}
