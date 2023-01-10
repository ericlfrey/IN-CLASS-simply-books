import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user }) {
  return (
    <>
      <div>{user.displayName}</div>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    lastLogin: PropTypes.string,
  }),
};

User.defaultProps = {
  user: {},
};
