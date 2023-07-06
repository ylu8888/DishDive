import React from 'react';

const Recipe = ({title, calories, image, ingred}) => {
    return (
    <div>
        <h1>{title}</h1>
        <ul>
            {ingred.map(ingred =>(
                <li>{ingred.text}</li>
            ))}
        </ul>
        <img src={image} alt=""/>
        <p>Calories: {calories.toFixed(2)}</p>
        

    </div>
    );
}

export default Recipe;