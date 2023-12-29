import React from "react";

import Select from "./Select";

type Props = {};

function SelectGroup({}: Props) {
  return (
    <div className="select-group">
      <label htmlFor="service">Hizmet Seçiniz</label>
      <Select />
    </div>
  );
}

export default SelectGroup;
