import React from 'react';
import { Button } from 'react-bootstrap';
import User from '../components/User';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <User user={user} />
      <Button type="button" onClick={signOut}>Sign out</Button>
    </>

  );
}
