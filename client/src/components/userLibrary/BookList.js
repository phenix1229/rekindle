import React, {useState} from 'react';


function BookSearch() {

    // useEffect(() => {
    //     if(current !== null){
    //         setSearch(current)
    //     } else {
    //         setSearch({
    //             name: '',
    //             email: '',
    //             phone: '',
    //             type: 'personal'
    //         })
    //     }
    // }, [contactContext, current])

    const [search, setSearch] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const {author, title} = search;

    const onChange = e => setSearch({...search, [e.target.name]: e.target.value})
    
    // const clearAll = () => {
    //     clearCurrent();
    // }

    const onSubmit = e => {
        // e.preventDefault();
        // if(current === null){
        //     addContact(search);  
        // } else {
        //     updateContact(search);
        // }
        // clearAll();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Find A Book</h2>
            <input type="text" placeholder="Author" name="author" value={author} onChange={onChange} />
            <input type="text" placeholder="Title" name="title" value={title} onChange={onChange} />
            
            <div>
                <input type="submit" value="Search" className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default BookSearch;
