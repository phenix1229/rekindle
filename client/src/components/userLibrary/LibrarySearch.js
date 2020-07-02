import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

function LibrarySearch() {
    const contactContext = useContext(ContactContext);
    const {addContact, current, clearCurrent, updateContact} = contactContext

    useEffect(() => {
        if(current !== null){
            setContact(current)
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const {name, email, phone, type} = contact;

    const onChange = e => setContact({...contact, [e.target.name]: e.target.value})
    
    const clearAll = () => {
        clearCurrent();
    }

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addContact(contact);  
        } else {
            updateContact(contact);
        }
        clearAll();
    }

    return (
        <form onSubmit={onSubmit}>
            {current ? <h2 className="text-primary">Edit Contact</h2> : <h2 className="text-primary">Find A Book</h2>}
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
            <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />
            <div>
                <input type="submit" value={current ? "Update Contact" : "Search"} className="btn btn-primary btn-block" />
            </div>
            {current && <div><button className="btn btn-light btn block" onClick={clearAll}>Clear</button></div>}
        </form>
    )
}

export default LibrarySearch
