import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { CongressMember, CheckboxItems } from "../../models/models";
import Checkbox from "../Checkbox/Checkbox";

type Props = {
  data: CongressMember[];
  onSearch: (
    data: CongressMember[],
    value: string,
    checkbox: CheckboxItems
  ) => any;
};

const checkboxes = [
  { name: "Name", key: 0 },
  { name: "Party", key: 1 },
  { name: "Gender", key: 2 },
  { name: "State", key: 3 }
];

const SearchInput: FC<Props> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState<any>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
      checked: event.target.checked
    });
  };

  const handleClickToggle = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    onSearch(data, searchTerm, checkedItems);
  }, [searchTerm, checkedItems]);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClickToggle}>Advanced Search</button>

      {isVisible &&
        checkboxes.map(item => (
          <Checkbox
            key={item.key}
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChangeCheckbox}
          />
        ))}
    </>
  );
};

export default SearchInput;
