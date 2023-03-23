import React, { useState } from "react";
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/modal/Modal';

export default function ImageGalleryItem ({id, webformatURL, largeImageURL, tags}) {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  {
    return <li key={id} className={css.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={css.image} onClick={openModal}/>
      {showModal && <Modal onClose={closeModal}><img src={largeImageURL} alt={tags} /></Modal>}
    </li>
    }
  }

  ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }

