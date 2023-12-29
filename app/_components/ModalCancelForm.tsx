import { cancelUrun, showModal } from "@/lib/productSlice";
import { AppDispatch, RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";

function ModalCancelForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedUrunId } = useSelector((store: RootState) => store.product);
  const [iptalSebep, setIptalSebep] = React.useState("");

  function handleCancel() {
    dispatch(
      cancelUrun({ id: selectedUrunId, sebep: iptalSebep, value: true })
    );
    dispatch(showModal({ modalName: "cancel", isShowModal: false }));
    setIptalSebep("");
  }

  return (
    <form>
      <p>Ürün İptal Sebebi</p>
      <textarea
        placeholder="Lütfen iptal sebebinizi yazınız"
        value={iptalSebep}
        onChange={(evn) => setIptalSebep(evn.target.value)}
      ></textarea>
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
          className="modal__btn modal__btn--red"
          func={handleCancel}
          text="İptal Et"
        />
      </div>
    </form>
  );
}

export default ModalCancelForm;
