import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getBookList} from '../../store/actions/bookActions';
import BookItem from './BookItem';
import books from '../../data/books';


function BookList({bookState:{availableBooks}, getBookList}) {
    useEffect(() => {
        setTimeout(() => {
            getBookList()
        }, 200);
    }, [])
    return (
        <>
        <h2 className="text-primary">Available Books</h2>
        <div className="bookList">
        {books.filter(book => availableBooks.includes(book.id)).map(book => 
            <BookItem key={book.id} book={book} />)
        }   
        </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    bookState: state.bookReducer,
    props: ownProps
});

export default connect(mapStateToProps, {getBookList})(BookList);
