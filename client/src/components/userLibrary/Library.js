import React from 'react';
import {connect} from 'react-redux';
import BookItem from './BookItem';

function Library({auth:{user}, bookState:{filtered}}) {
    // if(user){
        if(user.library.length === 0){
            return <h4>Please add a book</h4>
        }
    
        return (
            <>
                {filtered !== null ? filtered.map(book => 
                    <BookItem key={book.id} book={book} />
                    ) :
                    user.library.map(book => 
                        <BookItem key={book.id} book={book} />)
            }
            </>
        )
    // }
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    bookState: state.bookReducer,
});

export default connect(mapStateToProps)(Library);