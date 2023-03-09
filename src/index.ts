type Letter = "normal" | "uppercase" | "lowercase";

export default function wordFrequency(
  text: String,
  caseSensitive: Boolean = true,
  letter: Letter = "normal",
  noPunctuation = true
) {
  let _text = text;
  if (noPunctuation) {
    _text = text.replace(/[.,\/#!$%\^&\*;:{}=\-+_`~()]/g, "");
  }
  const words = _text.split(" ");

  function convert(word) {
    if (letter === "uppercase") {
      return word.toUpperCase();
    } else if (letter === "lowercase") {
      return word.toLowerCase();
    } else if (caseSensitive === true) {
      return word;
    } else {
      return word.toLowerCase();
    }
  }

  let frequencies = {};
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") continue;
    let word = convert(words[i]);
    frequencies[word] = (frequencies[word] || 0) + 1;
  }
  return frequencies;
}
