import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Time is:{this.state.date.toISOString()}</h1>
      </div>
    );
  }
}

export default Clock;
