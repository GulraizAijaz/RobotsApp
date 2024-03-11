import React from "react";


const Scroll = (props) => {
  return( 
   <div style={{overflow : "scroll", border: "1px solid #ffffff",height:"500px",background:"linear-gradient(to right,  rgba(0, 89, 172, 0.521),rgba(158, 0, 145, 0.582)", padding:'20px'}}> 
    {props.children}
    </div>
    
)
};

export default Scroll