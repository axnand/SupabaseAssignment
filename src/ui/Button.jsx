// src/ui/button.jsx

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ variant = "default", className, children, ...props }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  };

  return (
    <button
      className={classNames(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "primary", "secondary"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
