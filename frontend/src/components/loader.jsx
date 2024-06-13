import React from "react";

const Loader = () => {
  return (
    <>
      <link rel="stylesheet" href="assets/css/loader.css" />
      <div className="scene" style={{ zIndex: 90000 }}>
        <div className="shadow"></div>
        <div className="jumper">
          <div className="spinner">
            <div className="scaler">
              <div className="loader">
                <div className="cuboid">
                  <div className="cuboid__side"></div>
                  <div className="cuboid__side"></div>
                  <div className="cuboid__side"></div>
                  <div className="cuboid__side"></div>
                  <div className="cuboid__side"></div>
                  <div className="cuboid__side"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
