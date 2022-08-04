import './App.css';
import imgRM from './img/rick-morty.png'
import {useState} from "react";
import Characters from "./components/Characters";

function App() {
    const [characters, setCharacters] = useState(null);
    const reqApi = async () => {
        // info de api Rick&Morty
        const api = await fetch("https://rickandmortyapi.com/api/character");
        const characterApi = await api.json();
        setCharacters(characterApi.results);
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
          {characters ? (<Characters characters={characters} setCharacters={setCharacters}/> ): //desde Characters se accede a la funcionalidad de useState
              (<div>
                  <img src={imgRM} alt="Rick & Morty" className="img-home"/>
                  <button className="btn-search" onClick={reqApi}>Buscar Pjs</button>
              </div>)
          }
      </header>
    </div>
  );
}

export default App;
