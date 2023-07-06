import React,{useEffect, useState} from "react";
import Recipe from'./Recipe';
import Title from './Title';
import Footer from './Footer';
import './App.css';

const App = () => {

  const APP_ID = "462cfed0";
  const APP_KEY = "37538db0ba40a08befe71d08c7b476f6";

  //states are similar to variables and useState declares/initializes state variables. "setState" are the setters that update variables
  const [recipes, setRecipes] = useState([]); //setRecipes(data.hits) stores the API data to 'recipes' state
  const [search, setSearch] = useState("");  //state to store user input from search bar, initially empty
  const [query, setQuery] = useState("Vanilla Sponge Cake");  //state to store the final input when onSearch

  useEffect( () =>{ //activates on page load, useEffect hook is used to fetch recipes from API when query state changes
    getRecipes();   
  }, [query]); 

  //async operations are important for handling tasks that take time to complete such as fetching API Data, it allows other parts of code to 
  //continue executing while async task is being processed, this reduces overall processing time and maintains a responsive user experience
  // 'async' keyword marks function as asynchronous, allowing use of 'await' keyword, which pauses execution of function until promise is resolved
  const getRecipes = async () => { //'await' promise in this case: fetching response from API, NOTE*: doesn't pause the entire JS code, only this function
    const response = await fetch( //fetches recipes from API based on query state. Fetch sends a GET request to API endpoint 
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}` //query, APP_ID, APP_KEY are parameters of GET request
    );
    const data = await response.json();  //response is converted to JSON format 
    setRecipes(data.hits); //Retried recipe data is stored in recipes
    console.log(data.hits);
  };

  //updates the search with onChange event, which stores value of the user's input field
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  };

  //function triggers when user clicks on search, which updates query
  const getSearch = e =>{
    e.preventDefault(); //prevents default form submission which causes page to reload
    setQuery(search);
    setSearch(''); 
  }

  return (
    <div className="App">
      <Title />
      <form onSubmit={getSearch} className="searchform">
        <input className="searchbar" type="text" value={search} placeholder = "Search for any dish!" onChange={updateSearch}/>
        <button className="searchbutton" type="submit">
        🍳
        </button>

      </form>
      <div className="recipes">
      {recipes.map(recipe =>( //maps/iterates over the recipe array
        <Recipe 
        //passes the state data as prop to render actual item values for this component
        key={recipe.recipe.label} //key prop for proper rendering and prevent browser compile error
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingred={recipe.recipe.ingredients}
        />
      ))}
      </div>
      <Footer />
    </div>
   
  );
}

export default App;
