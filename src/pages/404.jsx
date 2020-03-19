import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="App">
            <div className="App-header">
                <h3>404</h3>
                <small>Page was not found</small>
                <Link to='/'>Go Home</Link>
            </div>
        </div>
    );

};

export default NotFoundPage;