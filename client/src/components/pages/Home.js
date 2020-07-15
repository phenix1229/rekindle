import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import BookList from '../userLibrary/BookList';
import LibraryFilter from '../userLibrary/LibraryFilter';
import Library from '../userLibrary/Library';
import {loadUser} from '../../store/actions/authActions';
import {getLibrary, getBookList} from '../../store/actions/bookActions';


function Home({auth:{isAuthenticated}, props:{history}, loadUser, getBookList, getLibrary}) {
    useEffect(() => {
        if (isAuthenticated) {
            loadUser();  
            getLibrary();
            setTimeout(() => {
                getBookList();
            }, 200); 
        } else {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [getBookList, getLibrary, isAuthenticated, history]);

    return (
        <div className="grid-2">
            <div className="bookList">
                <BookList />
            </div>
            <div>
                <LibraryFilter />
                <Library />
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    auth: state.authReducer,
    bookState: state.bookReducer,
    props: ownProps
})

export default connect(mapStateToProps, {loadUser, getBookList, getLibrary})(Home)
