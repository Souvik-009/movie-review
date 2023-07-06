import "./App.css";
import Header from "./componenets/Header";
import Movie from "./componenets/Movie";
import Movies from "./componenets/movie.json";
function App() {

  return (
    <div className="App">
    

      <Header />
      <div className="main">
        {Movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
              imbd={element.imdbID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
