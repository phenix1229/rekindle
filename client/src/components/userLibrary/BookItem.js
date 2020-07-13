import React from 'react';
import {connect} from 'react-redux';
import {removeBook, setCurrent, addBook} from '../../store/actions/bookActions';


const BookItem = ({ auth:{user}, book, removeBook, setCurrent}) => {
    const {id, title, author, text} = book;
    const desc = text.slice(0, 30);

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
                {user.library.includes(id) ? 
                    <button className="btn btn-dark btn-sm" onClick={() => setCurrent(book)}>Read</button> :
                    <button className="btn btn-dark btn-sm" onClick={() => addBook(book)}>Add</button>}
                {user.library.includes(id) && <button className="btn btn-danger btn-sm" onClick={onRemove}>Remove</button>}
            </p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    auth: state.authReducer
});

export default connect(mapStateToProps, {removeBook, setCurrent, addBook})(BookItem);