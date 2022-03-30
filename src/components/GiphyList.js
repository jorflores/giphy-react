import React from "react";
import Giphy from "./Giphy";

const GiphyList = (props) => {
  return (
    <div id="animals">
      {props.imageData.map((animal) => {
        return (
          <Giphy
            key={animal.images.fixed_height_still.url}
            still={animal.images.fixed_height_still.url}
            rating={animal.rating}
            animated={animal.images.fixed_height.url}
          />
        );
      })}
    </div>
  );
};

export default GiphyList;
