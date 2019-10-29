import React, { FC, ChangeEvent } from "react";
import "./CheckboxStyles.scss";

type Props = {
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<Props> = ({ name, checked = false, onChange }) => {
  return (
    <div className="checkbox">
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name} className="checkbox__label">
        {name}
      </label>
    </div>
  );
};

export default Checkbox;
