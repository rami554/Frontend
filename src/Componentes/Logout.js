import React from "react";

class Logout extends React.Component {
  render() {
    return <div>{(this.props.history.push("/"), localStorage.clear())}</div>;
  }
}
export default Logout;
