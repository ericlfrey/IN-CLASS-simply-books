/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getFavoriteAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

export default function FavoriteAuthors() {
  const { user } = useAuth();
  const [favoriteAuthors, setFavoriteAuthors] = useState([]);

  const getAllFavoriteAuthors = () => getFavoriteAuthors(user.uid).then(setFavoriteAuthors);

  useEffect(() => {
    getAllFavoriteAuthors();
  }, []);
  return (
    <div>
      {favoriteAuthors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllFavoriteAuthors} />
      ))}
    </div>
  );
}
