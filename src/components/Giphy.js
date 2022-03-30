import React from "react";

const Giphy = (props) => {


const handleClick = (e) =>{
 if (e.target.getAttribute("data-state") === "still"){
   //console.log("still")
   e.target.setAttribute("data-state","moving") 
   e.target.setAttribute("src",e.target.getAttribute("data-animate")) 
 }
 else {
  e.target.setAttribute("data-state","still") 
  e.target.setAttribute("src",e.target.getAttribute("data-still")) 
  // console.log("moving")
 }
}

  return (
    <div className="animal-item">
      <p>Rating: {props.rating}</p>
      <img
        src={props.still}
        data-still={props.still}
        data-animate={props.animated}
        data-state="still"
        className="animal-image"
        onClick={handleClick}
      ></img>
    </div>
  );
};

export default Giphy;
