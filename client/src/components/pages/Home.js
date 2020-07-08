import React from 'react';
import BookSearch from '../userLibrary/BookSearch';
import LibraryFilter from '../userLibrary/LibraryFilter';

function Home() {
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

export default Home
