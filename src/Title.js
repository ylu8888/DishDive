import React from 'react';
import style from './recipe.module.css';

const Title = () => {
    return(
        <div className={style.maintitle}>
        <h2 className={style.header}> DishDive</h2>
            <div>
            <h1 className={style.recipesearch}>🍕 RECIPE SEARCH 🍔</h1>
            <h3 className={style.readme}>DishDive has the recipes for tens of thousands of dishes from all over the world. Simply enter a food and get cooking!</h3>
            </div>

        </div>
    );
}

export default Title;