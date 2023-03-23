import React, { useEffect } from "react";
import css from './Modal.module.css'

export default function Modal ({onClose, children}) {

  useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);

      return () => {
          window.removeEventListener('keydown', handleKeyDown);
      }
  })

  const handleKeyDown = e => {
      if (e.code === 'Escape') {
      onClose();
    } 
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  {
    return <div className={css.overlay} onClick={handleBackdropClick}>
    <div className={css.modal}>
      {children}
    </div>
    </div>
  }
  }