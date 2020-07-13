import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import BookSearch from '../userLibrary/BookSearch';
import LibraryFilter from '../userLibrary/LibraryFilter';
import {loadUser} from '../../store/actions/authActions';


function Home({auth:{isAuthenticated}, props:{history}, loadUser}) {
    useEffect(() => {
        isAuthenticated ? loadUser() : 
            history.push('/login');
    
    });

    return (
        <div className="grid-2">
            <div>
                <BookSearch />
            </div>
            <div>
                <LibraryFilter />
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    auth: state.authReducer,
    props: ownProps
})

export default connect(mapStateToProps, {loadUser})(Home)
