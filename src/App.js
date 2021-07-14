import './App.css';
import data from './Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.album.images[1].url} alt="Album pic"></img>
        <p>Song Title: ${data.album.name}</p>
        <p>Song Artists: ${data.album.artists}</p>
        <p>Song Album: ${data.album.album_type}</p>
        <button><a href="{data.album.external_urls.spotify">Select</a></button>
      </header>
    </div>
  );
}

export default App;
