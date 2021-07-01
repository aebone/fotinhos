import React, { useState, useEffect } from 'react';
import './App.css';
import { getRandomCarlosImage, fetchData, getRandomQuote } from './service/service';

function App() {

  const [loadingPhoto, setLoadingphoto] = useState(true);
  const [loadindQuote, setLoadingQuote] = useState(true);
  const [photo, setPhoto] = useState();
  const [quote, setQuote] = useState();


  window.addEventListener("load", event => {
    var image = document.querySelector('img');
    var load = image.complete;
    if (load) setLoadingphoto(false);
  });


  useEffect(() => {
    const photo = getRandomCarlosImage();
    setPhoto(photo)
    const quote = getRandomQuote()
      .then((quoteObj) => {
        setQuote(quoteObj)
        setLoadingQuote(false)
      })
      .catch((error) => {
        console.log(error);
        setLoadingQuote(false)
      })
  }, []);

  return (
    <div className="App">
      {(loadingPhoto && loadindQuote) && <h1>loading</h1>}

      {loadingPhoto && <h1>loading photo</h1>}
      {loadindQuote && <h1>loading quote</h1>}

      <p>{quote && quote.quote}</p>
      <img id="carlos" src={photo} alt="Foto do Carlos" />

    </div>
  );
}

export default App;
