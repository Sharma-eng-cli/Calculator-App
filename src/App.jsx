import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [msg, setMsg] = useState("");

  function plus(e) {
    e.preventDefault();
    setMsg("");
    if (inputRef.current.value === "") return;
    setResult((prev) => prev + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setMsg("");
    if (inputRef.current.value === "") return;
    setResult((prev) => prev - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    if (inputRef.current.value === "") return;
    if (result === 0) {
      setMsg("First add some value before multiplying.");
    } else {
      setMsg("");
      setResult((prev) => prev * Number(inputRef.current.value));
    }
  }

  function divide(e) {
    e.preventDefault();
    if (inputRef.current.value === "") return;
    let d = Number(inputRef.current.value);
    if (d === 0) {
      setMsg("Denominator should be greater than 0.");
    } else {
      setResult((prev) => prev / d);
      setMsg("");
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    inputRef.current.placeholder = "Type a number";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    setMsg("");
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <p>{result}</p>
      <p>{msg}</p>
      <form>
        <p ref={resultRef}></p>
        <input ref={inputRef} type="number" placeholder="Type a number" />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
