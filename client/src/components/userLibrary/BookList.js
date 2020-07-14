import React from 'react';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import books from '../../data/books';


function BookList() {
    
    return (
        <>
        <h2 className="text-primary">Available Books</h2>
        <div className="bookList">
        {books.map(book => 
            <BookItem key={book.id} book={book} />)
        }   
        </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    auth: state.authReducer,
    props: ownProps
});

export default connect(mapStateToProps)(BookList);
