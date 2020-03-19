import React from 'react';

const PreviewPage = (props) => {
    return (
        <div className="App">
            <div className="App-header">
                <h3>Welcome to Preview Page</h3>
                <small>This is the Preview page of { props.match.params.id } element</small>   
            </div>
        </div>
    );

};

export default PreviewPage;