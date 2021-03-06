import {
  GET_LIBRARY,
  ADD_BOOK,
  REMOVE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTER,
  BOOK_ERROR,
  CLEAR_BOOKS,
  GET_BOOKLIST
} from '../actions/types';

const initialState = {
  availableBooks: [],
  userLibrary: null,
  current: null,
  filtered: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIBRARY:
      return {
        ...state,
        userLibrary: action.payload,
        loading: false
      };
    case GET_BOOKLIST:
      return {
        ...state,
        availableBooks: action.payload,
        loading: false
      };
    case ADD_BOOK:
      return {
        ...state,
        userLibrary: [action.payload.book, ...state.userLibrary],
        availableBooks: state.availableBooks.filter(book => book !== action.payload.book),
        loading: false
      };
    case REMOVE_BOOK:
      return {
        ...state,
        userLibrary: state.userLibrary.filter(
          book => book !== action.payload.book
        ),
        availableBooks: [action.payload.book, ...state.availableBooks],
        loading: false
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        books: null,
        filtered: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_BOOKS:
      return {
        ...state,
        filtered: state.books.filter(book => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return book.title.match(regex) || book.author.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};