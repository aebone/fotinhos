export const getRandomCarlosImage = () => {
  var randomPhoto = Math.floor(Math.random() * 148) + 1;
  var photoUrl = "https://raw.githubusercontent.com/alinebone/carlos-photos/main/images/carlos" + randomPhoto + ".jpg";
  return photoUrl;
}

export const getRandomQuote = async () => {
  const quotes = await fetch("https://raw.githubusercontent.com/alinebone/alinebone.github.io/wisdom/wisdom.json")
    .then(response => response.json())
  const quotesLength = quotes.length;
  var randomQuote = Math.floor(Math.random() * quotesLength) + 1;
  const quote = quotes[randomQuote];
  return quote;
}
