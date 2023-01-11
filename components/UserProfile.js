import React from 'react';
// import PropTypes from 'prop-types';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <>
      <div>{user.displayName}</div>
      <br />
      <Image
        src={user.photoURL}
        alt="Picture of the author"
        width="100"
        height="100"
      />
      <p>{user.email}</p>
      <p>{user.metadata.lastSignInTime}</p>
    </>
  );
}

// UserProfile.propTypes = {
//   user: PropTypes.shape({
//     photoURL: PropTypes.string,
//     displayName: PropTypes.string,
//     email: PropTypes.string,
//     lastLogin: PropTypes.string,
//   }),
// };

// UserProfile.defaultProps = {
//   user: {},
// };
