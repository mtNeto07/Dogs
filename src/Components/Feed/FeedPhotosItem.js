import React from 'react';
import styles from './FeedPhotosItem.module.css';
export function FeedPhotosItem({ photo, setModalPhoto }) {
  function haldleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={haldleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
}
