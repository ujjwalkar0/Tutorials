import React from 'react';
import "/home/ujjwal/Desktop/BLOG/tutorials/src/style.css"
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
            </div>
        } />);
}

export default Introduction;