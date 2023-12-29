import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/lib/store";
import { getUrunList, selectGrup } from "@/lib/productSlice";

const Select = () => {
  const { grupList, selectedGrup } = useSelector(
    (store: RootState) => store.product
  );
  const dispatch = useDispatch<AppDispatch>();
  const [showSelect, setShowSelect] = React.useState(false);

  function handleClick(id: number, name: string) {
    dispatch(selectGrup({ id, name }));
    dispatch(getUrunList(id));
    setShowSelect(!showSelect);
  }

  const style = {
    "--color": showSelect ? "#FEC490" : "#d0d5dd",
  } as React.CSSProperties;

  return (
    <div className="select">
      <button
        style={style}
        className={`select__custom ${showSelect ? "rotate" : ""}`}
        onClick={() => setShowSelect(!showSelect)}
      >
        <p>{selectedGrup.name}</p>

        <img src="/chevron-up.svg" alt="chevron up icon" />
      </button>

      {showSelect && (
        <div className="select__container">
          {grupList
            .filter((item) => item.paket_grup)
            .map((item) => (
              <button
                className={`select__button ${
                  selectedGrup.id === item.paket_grup_id ? "show" : ""
                }`}
                key={item.paket_grup_id}
                onClick={() => handleClick(item.paket_grup_id, item.paket_grup)}
              >
                <p>{item.paket_grup}</p>
                <img src="/check.svg" alt="check icon" />
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Select;
