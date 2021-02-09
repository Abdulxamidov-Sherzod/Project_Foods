import React, { Component } from "react";

export default class FoodDetail extends Component {
  render() {
    const { foodId } = this.props.match.params;
    return (
      <div>
        <h1> Food #id {foodId} </h1>
      </div>
    );
  }
}
