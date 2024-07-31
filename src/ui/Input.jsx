// src/ui/input.jsx

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = ({ type = "text", className, ...props }) => {
  return (
    <input
      type={type}
      className={classNames("px-4 py-2 rounded", className)}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
