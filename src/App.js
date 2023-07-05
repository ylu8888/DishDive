import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {

  const APP_ID = "462cfed0";
  const APP_KEY = "37538db0ba40a08befe71d08c7b476f6";



  useEffect( () =>{
    getRecipes();   
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="searchform">
        <input className="searchbar" type="text"/>
        <button className="searchbutton" type="submit">
        🍳
        </button>

      </form>
    </div>

  );
}

export default App;
