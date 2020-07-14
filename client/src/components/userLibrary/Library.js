import React from 'react';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import books from '../../data/books';

function Library({bookState:{filtered, userLibrary}}) {
    
    
        if(userLibrary === null || userLibrary.length === 0){
            return <h4>Please add a book</h4>
        }
    
        return (
            <>
                {filtered !== null ? filtered.map(book => 
                    <BookItem key={book.id} book={book} />
                    ) :
                    books.filter(book => userLibrary.includes(book.id)).map(book => 
                        <BookItem key={book.id} book={book} />)
            }
            </>
        )
}

const mapStateToProps = (state, ownProps) => ({
    props: ownProps,
    bookState: state.bookReducer,
});

export default connect(mapStateToProps)(Library);