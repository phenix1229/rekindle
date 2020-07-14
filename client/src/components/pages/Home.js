import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import BookList from '../userLibrary/BookList';
import LibraryFilter from '../userLibrary/LibraryFilter';
import Library from '../userLibrary/Library';
import {loadUser} from '../../store/actions/authActions';


function Home({auth:{isAuthenticated, user}, props:{history}, loadUser}) {
    useEffect(() => {
        isAuthenticated ? loadUser() : 
            history.push('/login');
    });

    return (
        <div className="grid-2">
            <div className="bookList">
                <BookList user={user}/>
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
    props: ownProps
})

export default connect(mapStateToProps, {loadUser})(Home)
