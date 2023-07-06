import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingred}) => {
    return (
    <div className={style.recipe}>
        <h1 className={style.title}>{title}</h1>
        <ul className={style.ingred}>
            {ingred.map(ingred =>(
                <li>{ingred.text}</li>
            ))}
        </ul>
        <img className={style.image} src={image} alt=""/>
        <p>Calories: {calories.toFixed(0)}g</p>
        

    </div>
    );
}

export default Recipe;