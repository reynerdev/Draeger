import React from "react";

const FormNotification = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default FormNotification;
