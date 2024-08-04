import React, { useState } from 'react';
import './Calculator.css';
import { sqrt, pow, sin, cos, tan } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleAdvanced = (func) => {
    try {
      setInput(func(eval(input)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => value === '=' ? handleEqual() : handleClick(value)}>{value}</button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleAdvanced(sqrt)}>√</button>
        <button onClick={() => handleAdvanced((x) => pow(x, 2))}>x²</button>
        <button onClick={() => handleAdvanced(sin)}>sin</button>
        <button onClick={() => handleAdvanced(cos)}>cos</button>
        <button onClick={() => handleAdvanced(tan)}>tan</button>
      </div>
    </div>
  );
};

export default Calculator;
