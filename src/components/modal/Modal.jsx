import React, { Component } from "react";
import css from './Modal.module.css'

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDoewn);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDoewn);
  }

  handleKeyDoewn = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render() {
    return <div className={css.overlay} onClick={this.handleBackdropClick}>
    <div className={css.modal}>
      {this.props.children}
    </div>
    </div>
  }
  }