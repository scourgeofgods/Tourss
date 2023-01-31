import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTours }) => {
  return (
    <>
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} removeTours={removeTours} />;
      })}
    </>
  );
};

export default Tours;
