import React from "react";
import "../counter.css";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { counterState, vatCountState } from "../state/counter/counter.State";

export const TotalWithVatcomponent = (props) => {
  const totalPrice = useRecoilValue(vatCountState);

  const resetFunc = useResetRecoilState(counterState);

  return (
    <div>
      <h1 className="emphasize">Total value with Vat: {totalPrice}$</h1>
      <button
        className="btn btn-success"
        onClick={resetFunc}
      >
        Reset
      </button>
    </div>
  );
};
