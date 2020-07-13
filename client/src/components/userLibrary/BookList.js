import React from 'react';
import BookItem from './BookItem';
import books from '../../data/books';


function BookList() {
    
    return (
        <>
        <h2 className="text-primary">Available Books</h2>
        <div className="bookList">
        <ul>
        {books.map(book => 
                <li>
                    <BookItem key={book.id} book /></li>)
    }
        </ul>
        </div>
        </>
    )
}

export default BookList;
