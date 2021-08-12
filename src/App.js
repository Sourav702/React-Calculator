import React, { useState } from "react";
import { Add, Sub, Mult, Div } from "./Calc";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [num1, setnum1] = useState(null);
  const [num2, setnum2] = useState(null);
  const [state, setstate] = useState(Add(Number(num1), Number(num2)));
  const [name, setname] = useState("Nothing");
  function getfirst(val) {
    console.log("first value = " + val.target.value);
    // let num1 = Number(val.target.value);
    setnum1(Number(val.target.value));
  }
  function getsec(val) {
    console.log("second value = " + val.target.value);
    setnum2(val.target.value);
  }
  const print = () => {
    setname("Addition");
    setstate(Add(Number(num1), Number(num2)));
    if (state === Add(Number(num1), Number(num2))) {
      setname("Subtraction");
      setstate(Sub(Number(num1), Number(num2)));
    } else if (state === Sub(Number(num1), Number(num2))) {
      setname("Multiplication");
      setstate(Mult(Number(num1), Number(num2)));
    } else if (state === Mult(Number(num1), Number(num2))) {
      setname("Division");
      setstate(Div(Number(num1), Number(num2)));
    } else {
      setname("Addition");
      setstate(Add(Number(num1), Number(num2)));
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Simple Arithmatic Calculator</h1>
        <h1>1st Number</h1>
        <input
          type="text"
          className="form-control"
          name=""
          id=""
          onChange={getfirst}
        />
        <h1>2nd Number</h1>
        <input
          className="form-control"
          type="text"
          name=""
          id=""
          onChange={getsec}
        />
        <br />
        <br />
        <button className="btn btn-primary" onClick={print}>
          Click for change operation
        </button>
        <br />
        <h1 className="text-center">
          {name}&nbsp;{state}
        </h1>
      </div>
    </>
  );
};
export default App;
