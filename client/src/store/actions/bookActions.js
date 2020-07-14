import axios from 'axios';
import {
  GET_LIBRARY,
  GET_BOOKLIST,
  ADD_BOOK,
  REMOVE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_BOOKS,
  CLEAR_FILTER,
  BOOK_ERROR
} from './types';
import books from '../../data/books';


  // Get Library
  export const getLibrary = () => async dispatch => {
    try {
      const res = await axios.get('/api/books');

      dispatch({
        type: GET_LIBRARY,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };
  
  // Get BookList
  export const getBookList = () => async dispatch => {
    try {
      const bookIds = [];
      books.forEach(book => bookIds.push(book.id));
      const res = await axios.get('/api/books');
      const list = [];
      bookIds.forEach(id => {if(!res.data.includes(id)) {list.push(id)}})
      dispatch({
        type: GET_BOOKLIST,
        payload: list
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Book
  export const addBook = (book) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put('/api/books', book, config);

      dispatch({
        type: ADD_BOOK,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Remove book
  export const removeBook = id => async dispatch => {
    try {
      await axios.delete(`/api/books/${id}`);

      dispatch({
        type: REMOVE_BOOK,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Book
  export const updateBook = book => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/books/${book._id}`,
        book,
        config
      );

      dispatch({
        type: UPDATE_BOOK,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Books
  export const clearBooks = () => async dispatch => {
    await dispatch({ type: CLEAR_BOOKS });
  };

  // Set Current Book
  export const setCurrent = book => async dispatch => {
    await dispatch({ type: SET_CURRENT, payload: book });
  };

  // Clear Current Book
  export const clearCurrent = () => async dispatch => {
    await dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Books
  export const filterBooks = text => async dispatch => {
    await dispatch({ type: FILTER_BOOKS, payload: text });
  };

  // Clear Filter
  export const clearFilter = () => async dispatch => {
    await dispatch({ type: CLEAR_FILTER });
  };