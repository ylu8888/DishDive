import React,{useEffect, useState} from "react";
import Recipe from'./Recipe';
import './App.css';

const App = () => {

  const APP_ID = "462cfed0";
  const APP_KEY = "37538db0ba40a08befe71d08c7b476f6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect( () =>{
    getRecipes();   
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits); 
    console.log(data.hits);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(''); 
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  };


  return (
    <div className="App">
      <form onSubmit={getSearch}className="searchform">
        <input className="searchbar" type="text" value={search} onChange={updateSearch}/>
        <button className="searchbutton" type="submit">
        Search 🍳
        </button>

      </form>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingred={recipe.recipe.ingredients}
        />
      ))}
    </div>

  );
}

export default App;
