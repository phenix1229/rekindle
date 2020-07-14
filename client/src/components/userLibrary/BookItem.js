import React from 'react';
import {connect} from 'react-redux';
import {removeBook, setCurrent, addBook} from '../../store/actions/bookActions';


const BookItem = ({props:{book}, bookState:{userLibrary}, removeBook, setCurrent, addBook}) => {
    const {id, title, author, text} = book;
    const desc = `${text.slice(0, 30)}...`;
    const libraryExists = userLibrary !== null && userLibrary.length !== 0;
    
    const onRemove = () => {
        removeBook(id);
    };

    return (
        <div className="card bg-light">
            <h3 className="text primary text-left">
                {title}
            </h3>
            <ul className="list">
                <li>{author}</li>
                <li>{desc}</li>
            </ul>
            <p>
                {(libraryExists && userLibrary.includes(id)) ? 
                    <button className="btn btn-dark btn-sm" onClick={() => setCurrent(book)}>Read</button> :
                    <button className="btn btn-dark btn-sm" onClick={() => addBook(book)}>Add</button>}
                {userLibrary.includes(id) && <button className="btn btn-danger btn-sm" onClick={onRemove}>Remove</button>}
            </p>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    auth: state.authReducer,
    bookState: state.bookReducer,
    props: ownProps
});

export default connect(mapStateToProps, {removeBook, setCurrent, addBook})(BookItem);