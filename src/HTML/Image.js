import React from 'react';
import "../style.css"
import Content from '../Content'

function Image(){
    return(<Content 
        title="Hello"
        content={
            <div id="Image">
            <h2>HTML Image</h2>
            <iframe style={{width: '100%'}} scrolling="no" title="Image" src="https://codepen.io/UJJWALKAR/embed/KKMRMRP?height=357&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={357} frameBorder="no">
                See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/KKMRMRP'&gt;Image&lt;/a&gt; by UJJWAL KAR
                (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
            </iframe>

            <ul>
                <li>The <code className="w3-codespan">src</code> attribute of <code className="w3-codespan">&nbsp; &lt;img&gt;</code> specifies the path to the image to be displayed&nbsp;</li>
                <li>The <code className="w3-codespan">width</code> and <code className="w3-codespan">height</code> attributes &nbsp;of <code className="w3-codespan">&lt;img&gt;</code> provide size information for images&nbsp;</li>
                <li>The <code className="w3-codespan">alt</code> attribute of <code className="w3-codespan">&nbsp; &lt;img&gt;</code> provides an alternate text for an image</li>
                <li>The <code className="w3-codespan">style</code> attribute is used to add styles &nbsp;to an element, such as color, font, size, and more</li>
                <li>The <code className="w3-codespan">lang</code> attribute &nbsp;of the <code className="w3-codespan">&lt;html&gt;</code> tag declares the &nbsp;language of the Web page</li>
                <li>The <code className="w3-codespan">title</code> attribute defines some extra &nbsp;information about an element</li>
            </ul>
            <h3>Image Map</h3>
            <iframe style={{width: '100%'}} scrolling="no" title="Map" src="https://codepen.io/UJJWALKAR/embed/XWKqKPj?height=480&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={480} frameBorder="no">
                See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/XWKqKPj'&gt;Map&lt;/a&gt; by UJJWAL KAR
                (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
            </iframe>
            <h2>Picture Element</h2>
            <div id="Picture">
            <iframe style={{width: '100%'}} scrolling="no" title="Picture" src="https://codepen.io/UJJWALKAR/embed/yLJjJRN?height=332&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={332} frameBorder="no">
                See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/yLJjJRN'&gt;Picture&lt;/a&gt; by UJJWAL KAR
                (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
            </iframe>
            </div>


            </div>
        } />);
}

export default Image;