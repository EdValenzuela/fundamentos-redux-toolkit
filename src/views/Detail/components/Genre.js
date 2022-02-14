import React from "react";

const Genre = ({genres}) => {
  return (
    <div className="flex flex-row my-1">
      <span className="font-bold mr-1">Genero</span>
      {genres?.map((value, i) => (
        <span key={i} className="mr-1">{`${value}${
          i !== genres.length - 1 ? "," : ""
        }`}</span>
      ))}
    </div>
  );
};

export default Genre;
