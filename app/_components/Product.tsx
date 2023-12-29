import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import ProductTable from "./ProductTable";
import { AppDispatch, RootState } from "@/lib/store";
import { getUrunList } from "@/lib/productSlice";
import Modal from "./Modal";
import Pagination from "./Pagination";

const perPage = 10;

function Product() {
  const { selectedGrup, modal, urunList } = useSelector(
    (store: RootState) => store.product
  );
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const pageCount = Math.ceil(urunList.length / perPage);

  React.useEffect(() => {
    dispatch(getUrunList(selectedGrup.id));
  }, []);

  React.useEffect(() => {
    setCurrentPage(1);
    setPerPage(10);
  }, [urunList]);

  const currentItems = urunList.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <section className="product">
      <Header
        length={urunList.length}
        currentPage={currentPage}
        pageCount={pageCount}
      />

      <ProductTable currentItems={currentItems} />

      {modal.isShowModal && <Modal />}

      <Pagination
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        setPerPage={setPerPage}
      />
    </section>
  );
}

export default Product;
