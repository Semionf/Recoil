import React from "react";
import { useRecoilState } from "recoil";

import {
  counterState,
  complexCountIncrement,
} from "../state/counter/counter.State";

import "../counter.css";

export const CounterBlueComponent = (props) => {
  const [count, setCount] = useRecoilState(counterState);
  const [countComplex, setCountComplex] = useRecoilState(complexCountIncrement);
  return (
    <div className="counter">
      <h1 className="mphasize">Counter Blue</h1>
      <p>Count :{count}$</p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-primary"
        >
          Increment
        </button>
        <button
          onClick={() => (count > 0 ? setCount(count - 1) : 0)}
          className="btn btn-primary"
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
