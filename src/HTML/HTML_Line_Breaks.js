import React from 'react';
import "../style.css"
import Content from '../Content'

function HTMLLineBreaks(){
    return(<Content 
        title="Hello"
        content={
        <div id="HTML_Line_Breaks">
        <h2>HTML Line Breaks</h2>
        <iframe style={{width: '100%'}} scrolling="no" title="Line Break" src="https://codepen.io/UJJWALKAR/embed/KKMWoEK?height=167&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={167} frameBorder="no">
        See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/KKMWoEK'&gt;Line Break&lt;/a&gt; by UJJWAL KAR
        (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
      </iframe>

                
            </div>
        } />);
}

export default HTMLLineBreaks;