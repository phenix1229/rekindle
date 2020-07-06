import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

function BookSearch() {
    const contactContext = useContext(ContactContext);
    const {addContact, current, clearCurrent, updateContact} = contactContext

    useEffect(() => {
        if(current !== null){
            setSearch(current)
        } else {
            setSearch({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current])

    const [search, setSearch] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const {author, title} = search;

    const onChange = e => setSearch({...search, [e.target.name]: e.target.value})
    
    const clearAll = () => {
        clearCurrent();
    }

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addContact(search);  
        } else {
            updateContact(search);
        }
        clearAll();
    }

    return (
        <form onSubmit={onSubmit}>
            {current ? <h2 className="text-primary">Edit Contact</h2> : <h2 className="text-primary">Find A Book</h2>}
            <input type="text" placeholder="Author" name="author" value={author} onChange={onChange} />
            <input type="text" placeholder="Title" name="title" value={title} onChange={onChange} />
            
            <div>
                <input type="submit" value="Search" className="btn btn-primary btn-block" />
            </div>
            {current && <div><button className="btn btn-light btn block" onClick={clearAll}>Clear</button></div>}
        </form>
    )
}

export default BookSearch;
