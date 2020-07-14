import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {filterBooks, clearFilter} from '../../store/actions/bookActions';

function LibraryFilter({books:{filtered}}, filterBooks, clearFilter) {
    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        };
    })

    const onChange = e => {
        if(text.current.value !== ''){
            filterBooks(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <h2 style={{marginBottom:'10px'}} className="text-primary">Library</h2>
            <input style={{marginTop:'0px'}} ref={text} type="text" placeholder="Search your library..." onChange={onChange} />
        </form>
    )
}

const mapStateToProps = (state) => ({
    books: state.bookReducer
});

export default connect(mapStateToProps, {filterBooks, clearFilter})(LibraryFilter);
