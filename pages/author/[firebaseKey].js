import { useRouter } from 'next/router';
import React from 'react';

export default function ViewAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  return (
    <>
      <div>ViewAuthor</div>
      <div>{firebaseKey}</div>
    </>

  );
}
