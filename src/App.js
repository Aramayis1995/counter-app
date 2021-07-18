import { Component } from "react";
import "./App.css";
import "./components/IncreaseButton/IncreaseButton";
import Button from "./components/IncreaseButton/IncreaseButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      maxCount: 10,
      minCount: 2,
      count: 0,
    };
  }

  getCount = (num) => {
    if (num === 0) {
      this.setState({
        count: 0,
      });
    } else if (!(this.state.count === 0 && num === -1)) {
      this.setState({
        count: this.state.count + num,
      });
    }
  };
  changeMaxCount = (event) => {
    console.log(event);

    this.setState({
      maxCount: event.target.value,
    });
  };
  render() {
    let count = this.state.count;
    return (
      <div>
        <h1>Count:{count}</h1>
        <input value={this.state.minCount}></input>
        <input
          value={this.state.maxCount}
          onChange={this.changeMaxCount}
        ></input>
        <Button sign="+" operation={() => this.getCount(+1)}></Button>
        <Button sign="-" operation={() => this.getCount(-1)}></Button>
        <Button sign="Reset" operation={() => this.getCount(0)}></Button>
      </div>
    );
  }
}
export default App;
