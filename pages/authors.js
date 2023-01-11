import React, { useEffect, useState } from 'react';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  const { user } = useAuth();
  const [authors, setAuthors] = useState([]);

  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  }, []);

  return (
    <div>{authors.map((author) => (
      <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
    ))}
    </div>
  );
}
