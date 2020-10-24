import React from 'react';
import "../style.css"
import Content from '../Content'

function New(){
    return(<Content 
        title="Hello"
        content={
            <h1>Hello WORLD</h1>
        } />);
}

export default New;