import React from 'react';
import { Button } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  // const { user } = useAuth();
  return (
    <>
      <UserProfile />
      <br />
      <Button type="button" onClick={signOut}>Sign out</Button>
    </>

  );
}
