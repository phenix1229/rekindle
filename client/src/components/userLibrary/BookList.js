import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import {getLibrary} from '../../store/actions/bookActions';
import books from '../../data/books';


function BookList({bookState:{availableBooks}, getLibrary}) {
    useEffect(() => {
        getLibrary();
    }, [getLibrary])

    return (
        <>
        <h2 className="text-primary">Available Books</h2>
        <div className="bookList">
        {availableBooks && books.filter(book => availableBooks.includes(book.id)).map(book => 
            <BookItem key={book.id} book={book} />)
        }   
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    bookState: state.bookReducer
});

export default connect(mapStateToProps, {getLibrary})(BookList);
