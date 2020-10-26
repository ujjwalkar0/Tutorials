import React from 'react';
import "../style.css"
import Content from '../Content'

function Pre(){
    return(<Content 
        title="Hello"
        content={
            <div id="pre">
                <h2>HTML pre Element</h2>
                <p>The &lt;pre&gt; tag in HTML is used to define the <strong>block of preformatted text</strong> which preserves the text spaces, line breaks, tabs, and other formatting characters</p>
                <iframe style={{width: '100%'}} scrolling="no" title="HTML <pre> Element" src="https://codepen.io/UJJWALKAR/embed/yLJMEZQ?height=237&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={237} frameBorder="no">
                    See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/yLJMEZQ'&gt;HTML &amp;lt;pre&amp;gt; Element&lt;/a&gt; by UJJWAL KAR
                    (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
                </iframe>

            </div>
        } />);
}

export default Pre;