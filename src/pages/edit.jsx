import React from 'react';

const EditPage = (props) => {
    return (
        <div className="App">
            <div className="App-header">
                <h3>Welcome to EDIT Page</h3>
                <small>You are editing { props.match.params.id } element</small>    
            </div>
        </div>
    );

};

export default EditPage;