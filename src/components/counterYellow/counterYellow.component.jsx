import React from "react";
import { useRecoilState } from "recoil";

import {
  counterState,
  complexCountIncrement,
} from "../state/counter/counter.State";
import "../counter.css";
export const CounterYellowComponent = (props) => {
  const [count, setCount] = useRecoilState(counterState);
  const [countComplex, setCountComplex] = useRecoilState(complexCountIncrement);
  return (
    <div className="counter">
      <h1>Counter Yellow</h1>
      <p>Count :{count}$</p>
      <div className="emphasize">
        <button
          onClick={() => setCount(count + 3)}
          className="btn btn-warning"
        >
          Increment
        </button>
        <button
          onClick={() => (count > 2 ? setCount(count - 3) : 0)}
          className="btn btn-warning"
        >
          Decrement
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setCountComplex(count)}
        >
          Increment Complex
        </button>
      </div>
    </div>
  );
};
