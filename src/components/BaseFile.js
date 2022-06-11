import React from "react";
import Home from "./Home/Home";
import Header from "./utils/Header";

export default function BaseFile() {
  return (
    <div>
      <div className="container mt-5 ml-5 mr-5">
        <div className="row">
          <div
            className="col-3 border border-primary w-30 p-3 my-5"
            style={{ minWidth: "250px" }}
          >
            <Header />
          </div>
          <div
            className="col-9 border border-primary"
            style={{ minWidth: "400px" }}
          >

            <Home/>
            
          </div>
        </div>
      </div>
    </div>
  );
}
