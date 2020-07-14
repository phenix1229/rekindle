import React from 'react';
import {connect} from 'react-redux';
import jwt from 'jsonwebtoken';
import BookItem from './BookItem';

function Library({bookState:{filtered}}) {
    const token = localStorage.getItem('token');
    const decoded = jwt.verify(token, 'secret');
    const user = decoded.user;
    
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
}

const mapStateToProps = (state, ownProps) => ({
    props: ownProps,
    bookState: state.bookReducer,
});

export default connect(mapStateToProps)(Library);