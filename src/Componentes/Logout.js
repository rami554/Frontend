import React from "react";
import Header from "../components/Header";

class Logout extends React.Component {
  render() {
    return <div><Header />{(this.props.history.push("/"), localStorage.clear())}</div>;
  }
}
export default Logout;
