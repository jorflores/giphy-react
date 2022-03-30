import React from "react";
import axios from "axios";

const ButtonSearch = (props) => {


  const fetchGiphy = async (name) =>{

    console.log("Search:" + name)
    let url = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=" + process.env.REACT_APP_GyphyAPI + "&limit=10"
    console.log(url)
    const res = await axios.get(url);
    props.apiResult(res.data)

}

  return (
    <button value={props.name} name={props.name} onClick={()=> fetchGiphy(props.name)}>
      {props.name}
    </button>
  );
};

export default ButtonSearch;
