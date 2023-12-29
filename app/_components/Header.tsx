import React from "react";
import Title from "./Title";
import SelectGroup from "./SelectGroup";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

type Props = {
  length: number;
  currentPage: number;
  pageCount: number;
};

function Header({ currentPage, length, pageCount }: Props) {
  const { selectedGrup } = useSelector((store: RootState) => store.product);
  return (
    <div className="product__header">
      <Title
        title={selectedGrup.name}
        smallTitle={`${length} kayıttan ${
          currentPage > 1 ? (currentPage - 1) * 11 : 1
        } - ${length} arasındaki kayıtlar gösteriliyor`}
      />

      <SelectGroup />
    </div>
  );
}

export default Header;
