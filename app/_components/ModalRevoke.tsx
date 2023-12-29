import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelUrun, showModal } from "@/lib/productSlice";
import { AppDispatch, RootState } from "@/lib/store";
import Button from "./Button";

function ModalRevoke() {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedUrunId } = useSelector((store: RootState) => store.product);

  function handleCancel() {
    dispatch(cancelUrun({ id: selectedUrunId, sebep: "", value: false }));
    dispatch(showModal({ modalName: "successful", isShowModal: true }));
  }

  return (
    <div className="modal__revoke">
      <div className="modal__img-box modal__img-box--orange">
        <img src="/alert-triangle.svg" alt="alert icon" />
      </div>

      <h4>İptal Talebinin Geri Çekilmesi</h4>
      <p className="modal__text">
        Zaten bir iptal talebiniz mevcut. Bu iptal talebini geri çekmek
        istediğinize emin misiniz?
      </p>

      <div className="modal__btn__container">
        <Button
          className="modal__btn modal__btn--outline"
          func={() =>
            dispatch(
              showModal({
                modalName: "cancel",
                isShowModal: false,
              })
            )
          }
          text="Vazgeç"
        />

        <Button
          className="modal__btn modal__btn--orange"
          func={handleCancel}
          text="Geri Çek"
        />
      </div>
    </div>
  );
}

export default ModalRevoke;
