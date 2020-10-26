import React from 'react';
import "../style.css"
import Introduction from './Introduction';
import Elements from './Elements'
import New from './New'
import Notes from './Notes'
import Heading from './Heading';
import Paragraphs from './Paragraphs';
import HTMLLineBreaks from './HTML_Line_Breaks';
import Pre from './pre';

function Html(){
    return (
        <>
{/*-------------------  Write All components, You want to add-- .. */}
        <Introduction />
        <Elements />
        <Heading />
        <Paragraphs />
        <HTMLLineBreaks />
        <Pre />
        <Notes />
        <New />
{/* -------------------------------------------------------------- */}
        </>
    );

}
export default Html; 