import React from "react";
import withDelay from './withDelay'

const Header = (props) => {
  return <h3>{props.children}</h3>;
};

export default withDelay(Header);
