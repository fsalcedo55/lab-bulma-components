import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  const { className, placeholder } = props;
  return (
    <div>
      <button className={className}>{placeholder}</button>
    </div>
  );
};

export default CoolButton;
