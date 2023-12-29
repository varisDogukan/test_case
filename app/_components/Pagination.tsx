import React from "react";
import CustomButton from "./CustomButton";

type Props = {
  perPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
};

function Pagination({
  currentPage,
  setCurrentPage,
  pageCount,
  setPerPage,
  perPage,
}: Props) {
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const numbers = Array.from({ length: 10 }, (_, i) => i * 10 + 10);

  return (
    <div className="pagination">
      <div>
        <p>Sayfada</p>
        <select
          value={perPage}
          onChange={(evn) => setPerPage(Number(evn.target.value))}
        >
          {numbers.map((num) => (
            <option key={crypto.randomUUID()} value={num}>
              {num} Adet
            </option>
          ))}
        </select>
        <p>kayıt göster</p>
      </div>

      {pageCount > 1 && (
        <div>
          <CustomButton
            className="pagination__button pagination__button__first reverse"
            func={() => setCurrentPage(1)}
            icon="/arrow-left.svg"
            text="Geri"
          />
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <CustomButton
              key={crypto.randomUUID()}
              className="pagination__button pagination__button__number"
              func={() => handlePageClick(page)}
              disabled={currentPage === page}
              page={page}
              isSmall={true}
            />
          ))}
          <CustomButton
            className="pagination__button pagination__button__last"
            func={() => setCurrentPage(pageCount)}
            icon="/arrow-left.svg"
            text="İleri"
          />
        </div>
      )}
    </div>
  );
}

export default Pagination;
