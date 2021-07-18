import React from "react";

class Button extends React.Component {
  render() {
    let sign = this.props.sign;
    let operation = this.props.operation;
    return <button onClick={operation}>{sign}</button>;
  }
}

export default Button;
