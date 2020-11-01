import React from 'react';
import "../style.css"
import Content from '../Content'

function Attributes(){
    return(<Content 
        title="Attriibute"
        content={
            <div>
            <div id="Attriibute">
                <h2>HTML Attributes</h2>
                <ul>
                    <li>Attributes provide <strong>additional information</strong> about elements, specified in <strong>the start tag, usually come in name/value pairs like: <strong>name=&quot;value&quot;</strong></strong></li>
                </ul>
            </div>
            <div id="href">
                <h3>The href Attribute</h3>
                <p><code class="w3-codespan">&lt;a&gt;</code> tag defines a hyperlink. The <code class="w3-codespan">href</code> attribute specifies the URL of the page</p>
                <iframe style={{width: '100%'}} scrolling="no" title="RwRyRRj" src="https://codepen.io/UJJWALKAR/embed/RwRyRRj?height=155&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={155} frameBorder="no">
                    See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/RwRyRRj'&gt;RwRyRRj&lt;/a&gt; by UJJWAL KAR
                    (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
                </iframe>
            </div>
            <div id="title">
                <h3>Title Attribute</h3>
                <p><code class="w3-codespan">&lt;a&gt;</code> tag defines a hyperlink. The <code class="w3-codespan">href</code> attribute specifies the URL of the page</p>
                <iframe style={{width: '100%'}} scrolling="no" title="title" src="https://codepen.io/UJJWALKAR/embed/GRqdqrx?height=154&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={154} frameBorder="no">
                    See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/GRqdqrx'&gt;title&lt;/a&gt; by UJJWAL KAR
                    (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
                </iframe>

            </div>
            {/* <div id="image">
                <h3>Title Attribute</h3>
                <p><code class="w3-codespan">&lt;a&gt;</code> tag defines a hyperlink. The <code class="w3-codespan">href</code> attribute specifies the URL of the page</p>
                <iframe style={{width: '100%'}} scrolling="no" title="title" src="https://codepen.io/UJJWALKAR/embed/GRqdqrx?height=154&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={154} frameBorder="no">
                    See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/GRqdqrx'&gt;title&lt;/a&gt; by UJJWAL KAR
                    (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
                </iframe>

            </div> */}


            </div>
        } />);
}

export default Attributes;