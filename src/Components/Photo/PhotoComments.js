import React from 'react';
import { PhotoCommentsForm } from './PhotoCommentsForm';
import { UserContext } from '../../UserContext';
import styles from './PhotoComments.module.css';

export function PhotoComments(props) {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  return (
    <>
      <ul className={StyleSheet.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
}
