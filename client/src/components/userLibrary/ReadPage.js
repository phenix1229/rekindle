import React from 'react';
import {connect} from 'react-redux';
import {clearCurrent} from '../../store/actions/bookActions';


function ReadPage({bookState:{current}, clearCurrent}) {

const {title, text} = current;
const onClose = () => {
    clearCurrent()
}
console.log(title)
    return (
        <>
        <h2 className="text-primary">{title}</h2>
        <button className="btn btn-danger btn-sm" onClick={onClose}>Close</button>
        <div className="grid-1">
            {text}
        </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    bookState: state.bookReducer,
    props: ownProps
});

export default connect(mapStateToProps, {clearCurrent})(ReadPage);