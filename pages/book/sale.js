/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getBooksOnSale } from '../../api/bookData';
import BookCard from '../../components/BookCard';
import { useAuth } from '../../utils/context/authContext';

export default function BooksOnSale() {
  const { user } = useAuth();
  const [booksOnSale, setBooksOnSale] = useState([]);

  const getAllBooksOnSale = () => getBooksOnSale(user.uid).then(setBooksOnSale);

  useEffect(() => {
    getAllBooksOnSale();
  }, []);
  return (
    <div>{booksOnSale.map((book) => (
      <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllBooksOnSale} />
    ))}
    </div>
  );
}
