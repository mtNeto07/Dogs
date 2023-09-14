import React from 'react';
import { FeedModal } from './FeedModal';
import { Feedphotos } from './Feedphotos';

export function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <Feedphotos setModalPhoto={setModalPhoto} />
    </div>
  );
}
