import React from "react";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  CounterBlueComponent,
  CounterRedComponent,
  CounterYellowComponent,
} from "./components";
import { TotalWithVatcomponent } from "./components/totalWithVat/totalWithVat.component";

function App() {
  return (
    <div className="app-container">
      <RecoilRoot>
        <CounterBlueComponent></CounterBlueComponent>
        <CounterRedComponent></CounterRedComponent>
        <CounterYellowComponent></CounterYellowComponent>
        <TotalWithVatcomponent></TotalWithVatcomponent>
      </RecoilRoot>
    </div>
  );
}

export default App;
