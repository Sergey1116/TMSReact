import React, { useState, useEffect } from "react";

export default (WrappedComponent) => {
  let timerId;
  return (props) => {
    
    const [secondsLeft, SetSecondsLeft] = useState(props.delayInSeconds);

    useEffect(() => {
      timerId = setInterval(
        () => SetSecondsLeft((secondsLeft) => secondsLeft - 1),
        1000
      );
    }, []);

    useEffect(() => {
      if (secondsLeft < 1) {
        clearInterval(timerId);
      }
    }, [secondsLeft]);

    if (secondsLeft > 0) {
      return <h4>Ждите {secondsLeft} секунд пока компонет отобразиться!</h4>;
    } else {
      return <WrappedComponent {...props} />;
    }
  };
};
