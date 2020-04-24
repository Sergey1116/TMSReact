import React from "react";
import withDelay from './withDelay'

function Header(props) {
  return <h4>{props.children}!</h4>;
};

export default withDelay(Header);
