import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import BookList from '../userLibrary/BookList';
import LibraryFilter from '../userLibrary/LibraryFilter';
import Library from '../userLibrary/Library';
import ReadPage from '../userLibrary/ReadPage';
import {loadUser} from '../../store/actions/authActions';


function Home({auth:{isAuthenticated}, bookState:{current}, props:{history}, loadUser}) {
    useEffect(() => {
        if (isAuthenticated) {
            loadUser();  
        } else {
            history.push('/login');
        };
        // eslint-disable-next-line
    }, [isAuthenticated]);

    if(current){
        return (
            <div className="grid-1"><ReadPage /></div>
        )
    } else {
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
}

const mapStateToProps = (state, ownProps) => ({
    auth: state.authReducer,
    bookState: state.bookReducer,
    props: ownProps
})

export default connect(mapStateToProps, {loadUser})(Home)
