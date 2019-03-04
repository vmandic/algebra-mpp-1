import React, { Component } from "react";
import { connect } from "react-redux";
import { DecrementClicked, IncrementClicked } from "../actions/clickedActions";
import {
  AddTwoNumbers,
  SubtractTwoNumbers
} from "../actions/calculationActions";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.inputAdd1 = React.createRef();
    this.inputAdd2 = React.createRef();
    this.inputSub1 = React.createRef();
    this.inputSub2 = React.createRef();
  }

  addTwoNums = () =>
    this.props.dispatch(
      AddTwoNumbers(
        Number(this.inputAdd1.current.value),
        Number(this.inputAdd2.current.value)
      )
    );

  subTwoNums = () =>
    this.props.dispatch(
      SubtractTwoNumbers(
        Number(this.inputSub1.current.value),
        Number(this.inputSub2.current.value)
      )
    );

  incClicked = () => this.props.dispatch(IncrementClicked());

  decClicked = () => this.props.dispatch(DecrementClicked());

  render() {
    return (
      <div>
        <div>
          <h3>Simple clicker:</h3>
          <div>
            <button type="button" onClick={this.decClicked}>
              Decrement (-1)
            </button>
            <button type="button" onClick={this.incClicked}>
              Increment (+1)
            </button>
          </div>
          <br />
          <div>&nbsp;&nbsp;Clicked: {this.props.clicked}x</div>
        </div>

        <hr />

        <div>
          <h3>Simple calculation:</h3>
          <div>
            <input type="number" defaultValue="16" ref={this.inputAdd1} /> +{" "}
            <input type="number" defaultValue="42" ref={this.inputAdd2} /> ={" "}
            <span>{this.props.addition}</span>
          </div>
          <button type="button" onClick={this.addTwoNums}>
            Add numbers
          </button>
        </div>
        <br />
        <div>
          <div>
            <input type="number" defaultValue="42" ref={this.inputSub1} /> -{" "}
            <input type="number" defaultValue="16" ref={this.inputSub2} /> ={" "}
            <span>{this.props.subtraction}</span>
          </div>
          <button type="button" onClick={this.subTwoNums}>
            Subtract numbers
          </button>
        </div>

        <hr />
        <h3>Current store state:</h3>
        <pre>
          {JSON.stringify(this.props.state, undefined, 2)}
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clicked: state.clicked,
    addition: state.calculation.sum,
    subtraction: state.calculation.sub,
    state
  };
};

export default connect(mapStateToProps)(Calculator);
