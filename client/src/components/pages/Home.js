import React from 'react';
import ContactForm from '../userLibrary/BookSearch';
import ContactFilter from '../userLibrary/LibraryFilter';

function Home() {
    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
            </div>
        </div>
    )
}

export default Home
