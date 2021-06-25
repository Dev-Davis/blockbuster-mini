import React from "react";

import './NotFound.css'

function NotFound() {
  return (
    <div className="text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="not-found">404 Not Found</h1>
            <h4> The page you are looking for cannot be found</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
