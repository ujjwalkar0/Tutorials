import React from 'react';
import "../style.css"
import Content from '../Content'

function Formating(){
    return(<Content 
        title="Hello"
        content={
        <div id="Formating">
            <h2>HTML Formating</h2>
            <iframe style={{width: '100%'}} scrolling="no" title="Formatting" src="https://codepen.io/UJJWALKAR/embed/qBNYNwV?height=390&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={390} frameBorder="no">
                See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/qBNYNwV'&gt;Formatting&lt;/a&gt; by UJJWAL KAR
                (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
            </iframe>

        <ul>
            <li><code className="w3-codespan">&lt;b&gt;</code> - Bold text</li>
            <li><code className="w3-codespan">&lt;strong&gt;</code> - Important text</li>
            <li><code className="w3-codespan">&lt;i&gt;</code> - Italic text</li>
            <li><code className="w3-codespan">&lt;em&gt;</code> - Emphasized text</li>
            <li><code className="w3-codespan">&lt;mark&gt;</code> - Marked text</li>
            <li><code className="w3-codespan">&lt;small&gt;</code> - Smaller text</li>
            <li><code className="w3-codespan">&lt;del&gt;</code> - Deleted text</li>
            <li><code className="w3-codespan">&lt;ins&gt;</code> - Inserted text</li>
            <li><code className="w3-codespan">&lt;sub&gt;</code> - Subscript text</li>
            <li><code className="w3-codespan">&lt;sup&gt;</code> - Superscript text</li>
        </ul>

                
            </div>
        } />);
}

export default Formating;