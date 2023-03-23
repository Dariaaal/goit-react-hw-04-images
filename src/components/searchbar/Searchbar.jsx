import React, { Component } from "react";
import css from './Searchbar.module.css';
import {ReactComponent as AddIcon} from '../icon-search.svg'

export default class Searchbar extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({value: e.target.value.toLowerCase()});
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSearch(this.state.value)
    this.reset();
  }

  reset = () => {
    this.setState({value: ''})
}

    render() {
      return (
        <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.label}><AddIcon width="30" height="30" fill='#3f51b5'/></span>
          </button>
      
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
      )
    }
  }
  
