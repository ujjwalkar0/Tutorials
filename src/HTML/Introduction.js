import React from 'react';
import "../style.css"
import Content from '../Content'

function Introduction(){
    return(
    <Content 
        title="Introduction"
        content={
            <div id="Introduction">
            <h2 style={{textAlign: 'left'}}>What is HTML?</h2>
            <ul style={{textAlign: 'left'}}>
            <li>HTML stands for Hyper Text Markup Language, it&nbsp;is the standard markup language for creating Web pages</li>
            <li>Hypertext defines the link between the web pages.markup language is used to define the text document within tag which defines the structure of web pages.HTML is a markup language that is used by the browser to manipulate text, images, and other content to display it in the required format.&nbsp;</li>
            <li>HTML consists of a series of elements,which tells the browser how to display the content</li>
            </ul>
            <div style={{textAlign: 'left'}}>
            <h2 style={{textAlign: 'left'}}>A Simple HTML Document</h2>
            </div>
            <iframe style={{width: '100%'}} scrolling="no" title="A Simple HTML Document" src="https://codepen.io/UJJWALKAR/embed/dyXpgJR?height=265&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={265} frameBorder="no">
                See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/dyXpgJR'&gt;A Simple HTML Document&lt;/a&gt; by UJJWAL KAR
                (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
            </iframe>
            <h3>Explaination :</h3>
            <ul>
            <li>The <code className="w3-codespan">&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document. For more read <a href="https://www.geeksforgeeks.org/html-doctypes/"><span style={{color: 'rgb(84, 172, 210)'}}>https://www.geeksforgeeks.org/html-doctypes/</span></a></li>
            <li>The <code className="w3-codespan">&lt;html&gt;</code> element is the root element of an HTML page</li>
            <li>The <code className="w3-codespan">&lt;head&gt;</code> element contains meta information about the HTML page</li>
            <li>The <code className="w3-codespan">&lt;title&gt;</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)&nbsp;</li>
            <li>The <code className="w3-codespan">&lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
            <li>&nbsp;The <code className="w3-codespan">&lt;h1&gt;</code> element defines a large heading</li>
            <li>&nbsp;The <code className="w3-codespan">&lt;p&gt;</code> element defines a paragraph</li>
            </ul>
            </div>
        } />);
}

export default Introduction;