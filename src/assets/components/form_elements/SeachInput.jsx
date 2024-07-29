import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import styles from '../../css/form_elements/SearchInput.module.css';

function SearchInput({w}){

    
    useEffect(() => {
        const placeholder = document.querySelector('#placeholder');
        const input = document.querySelector('input');
        input.addEventListener('input', () => {
            input.style.backgroundColor = 'white';
            if(placeholder) placeholder.style.display = 'none';
            if(!input.value) placeholder.style.display = 'inline-block';
        })
    }, [])

    return (
        <section className={styles.main} style={{width: w}}>
            <input type="text" name='search' placeholder="Procurar                       "/>
            <span id='placeholder'  className={styles.holder}> Farmácias | Produtos </span>
            <span className={styles.icon}> <FaSearch /> </span>
        </section>
    )
} 

export default SearchInput;