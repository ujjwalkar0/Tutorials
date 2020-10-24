import React from 'react';
import "./style.css"

function w3_open() {
  console.log("Hello")
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
function MyApp(props){
    return (
        <div className="body">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/*---------------------------------------: Home :------------------------*/}
          <div className="w3-right dm-profile dm-cont-mob ">
            <div className="w3-dropdown-click dm-dropdown-menu-center">
            </div>
          </div>
          <div className="w3-sidebar dm-sidebar w3-black w3-bar-block w3-collapse w3-card w3-animate-left" style={{width: '200px'}} id="mySidebar">
            <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={w3_close}>Close ×</button>
            {/*---------------------------------------- Index --------------------------------------------------------*/}
            {/* <a href={props.name} className="a w3-bar-item w3-button btn"> {props.name} </a> */}
            
            {props.list}

            {/*----------------------------------------------------------------------------------------------------------*/}
          </div>
          <div className="w3-main" style={{marginLeft: '300px'}}>
            <div className="w3-teal dm-home">
              <button className="w3-button w3-teal w3-xlarge w3-hide-large dm-mybtn" onClick={w3_open}>☰</button>
            </div> 
            <div className="w3-container">
              <div className="dm_desktop_margin"> 
                {/*-------------------------------: Content :--------------------------------------------------------*/}
                
                {props.content}
                

                {/*--------------------------------------: Content Finish :----------------------------------------*/}
              </div>
            </div>
          </div>
          </div>
      );

}
export default MyApp; 