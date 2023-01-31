import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="col card" key={id}>
      <img
        src={image}
        alt={name}
        style={{ height: 350, width: 700 }}
        className="img-fluid rounded-top"
      />
      <div className="card-img-overlay text-white">
        <div className="d-flex align-items-center justify-content-between">
          <h4>{name}</h4>
          <h6 className="bg-info rounded-1 p-1">${price}</h6>
        </div>
        <p>
          {readMore ? info : ` ${info.substring(0, 300)}`}
          <button
            className="btn btn-dark btn-sm "
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>{" "}
        <button
          className="btn btn-danger rounded-0 text-white"
          onClick={() => removeTours(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
