import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@/lib/productSlice";
import { AppDispatch } from "@/lib/store";
import Button from "./Button";

function ModalSuccessful() {
  const dispatch = useDispatch<AppDispatch>();

  function handleCancel() {
    dispatch(showModal({ modalName: "cancel", isShowModal: false }));
  }

  return (
    <div className="modal__successfull">
      <div className="modal__img-box modal__img-box--green">
        <img src="/check-circle.svg" alt="alert icon" />
      </div>

      <h4>İşlem Başarılı</h4>
      <p className="modal__text">İptal talebiniz başarıyla geri alınmıştır.</p>

      <Button
        className="modal__btn modal__btn--orange"
        func={handleCancel}
        text="Tamam"
      />
    </div>
  );
}

export default ModalSuccessful;
