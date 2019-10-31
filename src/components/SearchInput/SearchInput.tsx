import React, { FC, useState, ChangeEvent, useEffect, Fragment } from "react";
import { CongressMember } from "../../models/models";
import RadioButton from "../RadioButton/RadioButton";
import "./SearchInputStyles.scss";

type Props = {
  data: CongressMember[];
  onSearch: (
    data: CongressMember[],
    value: string,
    radio: string | null
  ) => any;
};
const checkboxes = [
  { name: "name", isChecked: false },
  { name: "party", isChecked: false },
  { name: "gender", isChecked: false },
  { name: "state", isChecked: false }
];
const SearchInput: FC<Props> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClickToggle = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    onSearch(data, searchTerm, checkedItems);
  }, [searchTerm, checkedItems]);

  const handleRB = (event: any) => {
    setCheckedItems(event.currentTarget.value);
    setSelectedOption(event.currentTarget.value);
  };

  return (
    <>
      <div className="searchWrapper">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="searchWrapper-input"
        />
        <div className="searchWrapper-circle"></div>
        <button className="searchWrapper-advanced" onClick={handleClickToggle}>
          Advanced Search
        </button>
      </div>
      ​
      {isVisible && (
        <div className="options">
          {checkboxes.map(item => (
            <div key={item.name}>
              <RadioButton
                name={item.name}
                selectedOption={selectedOption}
                onChange={handleRB}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default SearchInput;
