import React from 'react';
import "../style.css"
import Content from '../Content'

function Notes(){
    return(<Content 
        title="Notes"
        content={
            <div id="Notes">
            <h2>Notes :</h2>
            <ol>
            <li><strong>Never Skip the End Tag</strong> :- Some HTML elements will display correctly, even if you forget the end tag, but Unexpected results and errors may occur if you forget the end tag</li>
            <li><strong>Empty HTML Elements :-&nbsp;</strong>HTML elements with no content are called empty elements.<br /> Example :-<code className="w3-codespan">&nbsp;&lt;br&gt;</code> tag</li>
            <li><strong>HTML is Not Case Sensitive :- </strong>HTML tags are not case sensitive: <code className="w3-codespan">&lt;P&gt;</code> means the same as <code className="w3-codespan">&lt;p&gt;</code>.</li>
            </ol>
            </div>
        } />);
}

export default Notes;