// import axios from 'axios';
import { clientCredentials } from '../utils/client';
// API CALLS FOR BOOKS

const endpoint = clientCredentials.databaseURL;

const getBooks = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getBooksOnSale = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const booksOnSale = Object.values(data).filter((item) => item.sale);
        resolve(booksOnSale);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE BOOK
const createBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE BOOK
const updateBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// const getBooks = (uid) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/books.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((response) => {
//       if (response.data) {
//         resolve(Object.values(response.data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch((error) => reject(error));
// });

// const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
//     .then(() => resolve('deleted'))
//     .catch((error) => reject(error));
// });

// const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/books/${firebaseKey}.json`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });

// const createBook = (bookObj) => new Promise((resolve, reject) => {
//   axios.post(`${endpoint}/books.json`, bookObj)
//     .then((response) => {
//       const payload = { firebaseKey: response.data.name };
//       axios.patch(`${endpoint}/books/${response.data.name}.json`, payload)
//         .then(resolve);
//     }).catch(reject);
// });

// const updateBook = (bookObj) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
//     .then(resolve)
//     .catch(reject);
// });

export {
  getBooks,
  createBook,
  deleteBook,
  getSingleBook,
  updateBook,
  getBooksOnSale,
};
