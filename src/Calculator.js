import React, { useState } from 'react';
import './style.css';

const Actions = (props) => {
  const [outValue, setOutValue] = useState(0);
  const onPlusClick = () => {
    setOutValue(Number(props.number1) + Number(props.number2));
  };
  const onMinusClick = () => {
    setOutValue(Number(props.number1) - Number(props.number2));
  };
  const onMultiplyClick = () => {
    setOutValue(Number(props.number1) * Number(props.number2));
  };
  const onDivideClick = () => {
    setOutValue((Number(props.number1) / Number(props.number2)).toFixed(3));
  };
  return (
    <div>
      <input
        className="inp out"
        type="number"
        placeholder="Output"
        value={outValue}
        readOnly
      />
      <div className="hbox">
        <button className="btn" onClick={onPlusClick}>
          {' '}
          +{' '}
        </button>
        <button className="btn" onClick={onMinusClick}>
          {' '}
          -{' '}
        </button>
        <button className="btn" onClick={onMultiplyClick}>
          {' '}
          x{' '}
        </button>
        <button className="btn" onClick={onDivideClick}>
          {' '}
          /{' '}
        </button>
      </div>
    </div>
  );
};
const Calculator = () => {
  const [numberValue1, setNumberValue1] = useState(0);
  const [numberValue2, setNumberValue2] = useState(0);

  return (
    <div>
      <div className="inpBlk">
        <input
          className="inp"
          type="number"
          value={numberValue1}
          onChange={(event) => setNumberValue1(event.target.value)}
          required
          placeholder="Number1"
        />
        <input
          className="inp"
          type="number"
          value={numberValue2}
          onChange={(event) => setNumberValue2(event.target.value)}
          required
          placeholder="Number2"
        />
      </div>
      <div>
        <Actions number1={numberValue1} number2={numberValue2} />
      </div>
    </div>
  );
};

export default Calculator;
