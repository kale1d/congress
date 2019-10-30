import React, { FC, ChangeEvent } from "react";
import "./RadioButtonStyles.scss";

type Props = {
  name: string;
  selectedOption: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: FC<Props> = ({ name, onChange, selectedOption }) => (
  <div className="radioWrapper">
    <input
      id={name}
      type="radio"
      value={name}
      checked={selectedOption === name}
      onChange={onChange}
      className="radioWrapper-radio"
    />
    <label className="radioWrapper-label" htmlFor={name}>
      {name}
    </label>
  </div>
);

export default RadioButton;
