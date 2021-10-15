import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, loading, size, message } = this.props;
    console.log(this.props.message);
    return (
      <>
        <div className="text-center">
          <ClipLoader color={color} loading={loading} size={size}></ClipLoader>
          <h1>{message}</h1>
        </div>
      </>
    );
  }
}
