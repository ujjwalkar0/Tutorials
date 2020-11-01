import React from 'react';
import "../style.css"
import Notes from './Notes'

function Html(){
    return (
        <>
{/* --------------  Introduction  --------------------- */}
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


{/* --------------  Elements  --------------------- */}

<div id="Elements">

<h2>What is an HTML Element?</h2>
<p><span style={{color: 'brown', Color: '#d76363'}}><span style={{color: 'mediumblue', Color: '#5190ff'}}>&lt;</span>tagname<span style={{color: 'mediumblue', Color: '#5190ff'}}>&gt;</span></span>Content goes here...<span style={{color: 'brown', Color: '#d76363'}}><span style={{color: 'mediumblue', Color: '#5190ff'}}>&lt;</span>/tagname<span style={{color: 'mediumblue', Color: '#5190ff'}}>&gt;</span></span></p>
<p>Example :-</p>
<p style={{marginLeft: '20px'}}><span style={{color: 'brown', Color: '#d76363'}}><span style={{color: 'mediumblue', Color: '#5190ff'}}>&lt;<span style={{color: 'brown', Color: '#d76363'}}>h1</span>&gt;</span></span>My &nbsp;First Heading<span style={{color: 'brown', Color: '#d76363'}}><span style={{color: 'mediumblue', Color: '#5190ff'}}>&lt;</span>/h1<span style={{color: 'mediumblue', Color: '#5190ff'}}>&gt;</span></span></p>
<p style={{marginLeft: '20px'}}><span style={{color: 'brown', Color: '#d76363'}}><span style={{color: 'mediumblue', Color: '#5190ff'}}>&lt;</span>p<span style={{color: 'mediumblue', Color: '#5190ff'}}>&gt;</span></span>My first paragraph.<span style={{color: 'brown', Color: '#d76363'}}><span style={{color: 'mediumblue', Color: '#5190ff'}}>&lt;</span>/p<span style={{color: 'mediumblue', Color: '#5190ff'}}>&gt;</span></span></p>
<table className="w3-table-all notranslate" style={{marginRight: 'calc(4%)', width: '96%'}}>
  <thead>
    <tr>
      <th style={{width: '34.4037%'}}>Tagname</th>
      <th style={{width: '65.5963%'}}>Element content</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width: '34.4037%'}}>h1</td>
      <td style={{width: '65.5963%'}}>My First Heading</td>
    </tr>
    <tr>
      <td style={{width: '34.4037%'}}>p</td>
      <td style={{width: '65.5963%'}}>My first paragraph.</td>
    </tr>
    <tr>
      <td style={{width: '34.4037%'}}>br</td>
      <td style={{width: '65.5963%'}}><em>none</em></td>
    </tr>
  </tbody>
</table>

<p>See Above Example ......</p>
<p>The <code class="w3-codespan">&lt;html&gt;</code> element is the root element and it defines the whole HTML document.</p>
<p>Then, inside the <code class="w3-codespan">&lt;html&gt;</code> element there is a &nbsp;<code class="w3-codespan">&lt;title&gt;</code> and <code class="w3-codespan">&lt;body&gt;</code>&nbsp;</p>
<p>Inside the <code class="w3-codespan">&lt;body&gt;</code> element there are two other elements: <code class="w3-codespan">&lt;h1&gt;</code> and <code class="w3-codespan">&nbsp;&lt;p&gt;</code></p>
</div>


{/* ---------------------  Heading  ------------------------------- */}
<div id="Heading">
<h2>HTML Headings</h2>
<iframe style={{width: '100%'}} scrolling="no" title="Heading" src="https://codepen.io/UJJWALKAR/embed/MWepQxZ?height=265&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={265} frameBorder="no">
See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/MWepQxZ'&gt;Heading&lt;/a&gt; by UJJWAL KAR
(&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
</iframe>
<h3>Headings Are Important</h3>
<p>Search engines use the headings to index the structure and content of your web pages.</p>
</div>

{/* ----------------------- Paragraphs ----------------------------- */}

<div id="Paragraphs">
<h2>Paragraphs</h2>
<iframe style={{width: '100%'}} scrolling="no" title="Paragraphs" src="https://codepen.io/UJJWALKAR/embed/JjKWLBW?height=265&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={265} frameBorder="no">
See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/JjKWLBW'&gt;Paragraphs&lt;/a&gt; by UJJWAL KAR
(&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
</iframe>               
</div>

{/* ----------------------- HTML Line Breaks ----------------------------- */}

<div id="HTML_Line_Breaks">
<h2>HTML Line Breaks</h2>
<iframe style={{width: '100%'}} scrolling="no" title="Line Break" src="https://codepen.io/UJJWALKAR/embed/KKMWoEK?height=167&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={167} frameBorder="no">
See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/KKMWoEK'&gt;Line Break&lt;/a&gt; by UJJWAL KAR
(&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
</iframe>
</div>

{/* ------------------------ Pre ---------------------------- */}
<div id="pre">
<h2>HTML pre Element</h2>
<p>The &lt;pre&gt; tag in HTML is used to define the <strong>block of preformatted text</strong> which preserves the text spaces, line breaks, tabs, and other formatting characters</p>
<iframe style={{width: '100%'}} scrolling="no" title="HTML <pre> Element" src="https://codepen.io/UJJWALKAR/embed/yLJMEZQ?height=237&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={237} frameBorder="no">
    See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/yLJMEZQ'&gt;HTML &amp;lt;pre&amp;gt; Element&lt;/a&gt; by UJJWAL KAR
    (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
</iframe>
</div>
{/* ------------------------ Attriibute ---------------------------- */}
<div id="Attriibute">
<h2>HTML Attributes</h2>
<ul>
    <li>Attributes provide <strong>additional information</strong> about elements, specified in <strong>the start tag, usually come in name/value pairs like: <strong>name=&quot;value&quot;</strong></strong></li>
</ul>
</div>

{/* ----------------------- href ----------------------------- */}

<div id="href">
<h3>The href Attribute</h3>
<p><code class="w3-codespan">&lt;a&gt;</code> tag defines a hyperlink. The <code class="w3-codespan">href</code> attribute specifies the URL of the page</p>
<iframe style={{width: '100%'}} scrolling="no" title="RwRyRRj" src="https://codepen.io/UJJWALKAR/embed/RwRyRRj?height=155&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={155} frameBorder="no">
    See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/RwRyRRj'&gt;RwRyRRj&lt;/a&gt; by UJJWAL KAR
    (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
</iframe>
</div>

{/* ------------------------ title ---------------------------- */}

<div id="title">
<h3>Title Attribute</h3>
<p><code class="w3-codespan">&lt;a&gt;</code> tag defines a hyperlink. The <code class="w3-codespan">href</code> attribute specifies the URL of the page</p>
<iframe style={{width: '100%'}} scrolling="no" title="title" src="https://codepen.io/UJJWALKAR/embed/GRqdqrx?height=154&theme-id=dark&default-tab=html,result" loading="lazy" allowTransparency="true" allowFullScreen="true" height={154} frameBorder="no">
    See the Pen &lt;a href='https://codepen.io/UJJWALKAR/pen/GRqdqrx'&gt;title&lt;/a&gt; by UJJWAL KAR
    (&lt;a href='https://codepen.io/UJJWALKAR'&gt;@UJJWALKAR&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
</iframe>
</div>
{/* -------------------------- Image -------------------------- */}
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
{/* --------------------- Formating ------------------------------- */}
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
{/* ---------------------------------------------------- */}

        <Notes />        
{/* -------------------------------------------------------------- */}
        </>
    );

}
export default Html; 