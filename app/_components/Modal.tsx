import React from "react";
import { useDispatch, useSelector } from "react-redux";

import useOutsideClick from "@/hooks/useOutsideClick";
import { showModal } from "@/lib/productSlice";
import { AppDispatch, RootState } from "@/lib/store";
import ModalCancel from "./ModalCancel";
import ModalRevoke from "./ModalRevoke";
import ModalSuccessful from "./ModalSuccessful";

type Props = {};

function Modal({}: Props) {
  const { modal } = useSelector((store: RootState) => store.product);
  const dispatch = useDispatch<AppDispatch>();
  const ref = React.useRef(null);

  useOutsideClick(ref, () => {
    dispatch(
      showModal({ modalName: modal.modalName, isShowModal: !modal.isShowModal })
    );
  });

  function ModalContainer() {
    switch (modal.modalName) {
      case "cancel":
        return <ModalCancel />;

      case "revoke":
        return <ModalRevoke />;

      default:
        return <ModalSuccessful />;
    }
  }

  return (
    <div className="modal">
      <div className="modal__container" ref={ref}>
        <ModalContainer />
      </div>
    </div>
  );
}

export default Modal;
