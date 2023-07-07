import React from 'react';
import style from './recipe.module.css';

// The App components state data gets passed to Recipe component, which takes in set of input called props
//Recipe component takes in an object with properties "title, calories, img, ingred" as its props
const Recipe = ({title, calories, image, ingred}) => {
    return (
    <div className={style.recipe}>
    
        <h1 className={style.title}>{title}</h1>
        <ul className={style.ingred}>
            {ingred.map(ingred =>( //mapping over ingredients which is an array 
                <li className={style.listitem}>{ingred.text}</li>
            ))}
        </ul>
        <img className={style.image} src={image} alt=""/>
        <p className={style.calories}>Calories: {calories.toFixed(0)}g</p>
        

    </div>
    );
}

export default Recipe;