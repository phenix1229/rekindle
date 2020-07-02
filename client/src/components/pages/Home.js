import React from 'react';
import Contacts from '../userLibrary/Contacts';
import ContactForm from '../userLibrary/LibrarySearch';
import ContactFilter from '../userLibrary/LibraryFilter';

function Home() {
    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home
