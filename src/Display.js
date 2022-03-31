import React from "react";

const Display = (props) => {
  const { sendData } = props;
  return (
    <div>
      {sendData.map((x) => {
        return (
          <div>
            <h3>Data Container</h3>
            <p>Email : {x.email}</p>
            <p>Password : {x.password}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Display;
