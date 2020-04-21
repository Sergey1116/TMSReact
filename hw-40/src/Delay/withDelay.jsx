import React, { Component } from "react";

export default (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { secondsLeft: props.delayInSeconds };
    }

    componentDidMount() {
      this.timerId = setInterval(
        () =>
          this.setState((state) => ({ secondsLeft: state.secondsLeft - 1 })),
        1000
      );
    }

    componentDidUpdate(){
        if (this.state.secondsLeft <= 0){
            clearInterval(this.timerId);
        }
    }

    render() {
      if (this.state.secondsLeft > 0) {
        return (
          <h3>
            Подождите {this.state.secondsLeft} секунд пока компонет отобразиться!
          </h3>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};
