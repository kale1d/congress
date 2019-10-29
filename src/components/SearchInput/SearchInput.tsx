import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { CongressMember } from "../../models/models";

type Props = {
  data: CongressMember[];
  onSearch: (data: CongressMember[], value: string) => any;
};
const SearchInput: FC<Props> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    onSearch(data, searchTerm);
  }, [searchTerm]);
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
