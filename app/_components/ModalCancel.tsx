import React from "react";
import ModalCancelForm from "./ModalCancelForm";

function ModalCancel() {
  return (
    <div className="modal__cancel">
      <div className="modal__img-box modal__img-box--red">
        <img src="/alert-circle.svg" alt="alert icon" />
      </div>

      <h4>Ürün İptali Talebi</h4>
      <p className="modal__text">
        Ürününüzü iptal etmek istediğinize emin misiniz?
      </p>

      <ModalCancelForm />
    </div>
  );
}

export default ModalCancel;
