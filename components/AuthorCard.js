import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj, onUpdate }) {
  return (
    <>
      <div>AuthorCard</div>
      <div>{authorObj}</div>
      <div>{onUpdate}</div>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.bool,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
