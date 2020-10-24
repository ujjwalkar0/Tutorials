import React from 'react';
import "../style.css"
import Content from '../Content'

function Introduction(){
    return(
    <>
    <Content 
        name="#no"
        content={
            <h1>Introduction to CSS</h1>
        }
        />
    </>);
}

export default Introduction;