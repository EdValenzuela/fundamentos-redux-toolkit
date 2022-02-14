import React from "react";

const Cast = ({cast}) => {
  return (
    <div className="flex flex-row my-1 flex-wrap">
      <span className="font-bold mr-1">Cast</span>
      {cast.map(({ name }, i) => (
        <span key={i} className="mr-1">{`${name} ${
          i !== cast.length
        } - 1 ? ',' : ''}`}</span>
      ))}
    </div>
  );
};

export default Cast;
