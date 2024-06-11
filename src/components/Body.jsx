import React from "react";
import SamplePhoto from "./SamplePhoto";

import MainPhoto from "./MainPhoto";
import mainPhotos from "../mainPhotos";
import OtherPhoto from "./OtherPhoto";
import otherPhotos from "../otherPhotos";
function Body(props){
     return(
        <div>
        
        <h3 className="photoHeader">Sample Products</h3>
        <div id="sample">
         <SamplePhoto />
        </div>
        
        
        
        <h3 className="photoHeader">Most Sold Toys</h3>
         <div id="main">
           <MainPhoto />
         </div>
        
        
        <h3 className="photoHeader">Similar Products</h3> 
         <div id="other">
          <OtherPhoto />
         </div>
        
        </div>)
}

export default Body