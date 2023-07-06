import React from 'react';
import style from './recipe.module.css';

const Footer = () => {
    return(
        <div className={style.footer}>
            <h4> © {new Date().getFullYear()} Yang Lu: Thanks for checking out my page! :) </h4>
        </div>
        
    );
}

export default Footer;