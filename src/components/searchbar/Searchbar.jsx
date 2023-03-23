import React, { useState } from "react";
import css from './Searchbar.module.css';
import {ReactComponent as AddIcon} from '../icon-search.svg'

export default function Searchbar ({handleSearch}) {

const [value, setValue] = useState('');

const handleChange = e => {
  setValue(e.target.value.toLowerCase());
}

const handleSubmit = e => {
  e.preventDefault();
  handleSearch(value);
  reset();
}

const reset = () => {
  setValue('');
}

      return (
        <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.label}><AddIcon width="30" height="30" fill='#3f51b5'/></span>
          </button>
      
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={value}
          />
        </form>
      </header>
      )
  }
  
