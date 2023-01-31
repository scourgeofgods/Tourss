import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-lg-6">
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loading;
