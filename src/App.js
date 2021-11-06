import React ,{ useState } from 'react'
import './App.css';
 
import MoviesList from './Components/MovieList/MoviesList';
import NavBar from './Components/NavBar/NavBar';
import {Data} from './Data';



const App =() => {
  const [movies, setMovies] = useState(Data);
  const [searchRating, setSearchRating]= useState(5);
  const [filterByTitle, setFilterByTitle] = useState("");
  
  const addMovie = (newMovie) => {
    return setMovies([...Data, newMovie]);
  };
    return (
      <div style={{backgroundColor: "#FCD8D4"}}>
       <NavBar  setFilterByTitle={setFilterByTitle}  addMovie={addMovie} setSearchRating={setSearchRating} />

        <h1 style={{fontFamily:'roboto' ,fontSize:'60px',textDecoration:'underline', color:'#7D1935', textAlign:'center',padding:'50px' , letterSpacing:'15px'}}>Movies:</h1>
        
        <MoviesList movies={movies} filterByTitle={filterByTitle} searchRating={searchRating} />
      </div>
    );
  };


export default App;