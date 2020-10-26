import React from 'react';
import "../style.css"
import Content from '../Content'

function Heading(){
    return(<Content 
        title="Hello"
        content={
            <div id="Heading">
        <h2>HTML Headings</h2>
        <iframe style={{width: '100%'}} scrolling="no" title="Heading" src="https://codepen.io/UJJWALKAR/embed/MWepQxZ?height=265&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={265} frameBorder="no">
        See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/MWepQxZ'&gt;Heading&lt;/a&gt; by UJJWAL KAR
        (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
        </iframe>
        <h3>Headings Are Important</h3>
        <p>Search engines use the headings to index the structure and content of your web pages.</p>
            </div>
        } />);
}

export default Heading;