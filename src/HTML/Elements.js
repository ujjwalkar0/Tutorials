import React from 'react';
import "../style.css"
import Content from '../Content'

function Elements(){
    return(<Content 
        title="Elements"
        content={
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
        } />);
}

export default Elements;