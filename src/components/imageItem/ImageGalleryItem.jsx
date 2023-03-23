import React, { Component } from "react";
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  openModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render(){
    const {id, webformatURL, largeImageURL, tags} = this.props;
    return <li key={id} className={css.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={css.image} onClick={this.openModal}/>
      {this.state.showModal && <Modal onClose={this.closeModal}><img src={largeImageURL} alt={tags} /></Modal>}
    </li>
    }
  }

  ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }

