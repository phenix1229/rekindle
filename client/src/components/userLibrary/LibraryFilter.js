import React, {useRef, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

function LibraryFilter() {
    const contactContext = useContext(ContactContext);
    const {filterContacts, clearFilter, filtered} = contactContext;
    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        };
    })

    const onChange = e => {
        if(text.current.value !== ''){
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <h2 className="text-primary">Library</h2>
            <input ref={text} type="text" placeholder="Search your library..." onChange={onChange} />
        </form>
    )
}

export default LibraryFilter
