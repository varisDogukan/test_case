import { IUrunList } from "@/lib/interfaces";
import { selectUrunId, showModal } from "@/lib/productSlice";
import { AppDispatch } from "@/lib/store";
import { formatDate, formatPrice } from "@/utils";
import { useDispatch } from "react-redux";
import CustomButton from "./CustomButton";

type Props = {
  product: IUrunList;
  tableHeaders: string[];
};

function ProductItem({ product, tableHeaders }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  function handleClick(param: { modalName: string; isShowModal: boolean }) {
    dispatch(showModal(param));
    dispatch(selectUrunId(product.id));
  }

  const productFeatures = product.ozellik
    .split("\\r\\n")
    .reduce((acc: any, current: string) => {
      const [key, value] = current.split(" : ");
      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  const aciklama = JSON.parse(product.json_ozellik as any).aciklama;

  const productData = tableHeaders?.map((header) => {
    if (header === "Ürün Adı") {
      return <td key={`${product.id}_name`}>{aciklama}</td>;
    } else if (header === "Fiyat (KDV Dahil)") {
      return (
        <td key={`${product.id}_price`}>
          {formatPrice(product.urun_fiyat_tl)}
        </td>
      );
    } else if (header === "Yenileme") {
      return (
        <td key={`${product.id}_renewal`}>{formatDate(product.start_zaman)}</td>
      );
    } else if (header === "Durum") {
      return (
        <td key={`${product.id}_status`}>
          <span
            className={
              product.hizmet_durum === "Aktif"
                ? "active"
                : product.hizmet_durum === "Pasif"
                ? "inactive"
                : product.hizmet_durum === "Durduruldu"
                ? "stop"
                : "wait"
            }
          >
            {product.hizmet_durum}
          </span>
        </td>
      );
    } else if (header === "İşlemler") {
      return (
        <td key={`${product.id}_actions`}>
          {product.iptal_talep ? (
            <CustomButton
              className="btn__action btn__action--revoke reverse"
              func={() =>
                handleClick({ modalName: "revoke", isShowModal: true })
              }
              icon="/arrow-left.svg"
              text="Geri Al"
            />
          ) : (
            <CustomButton
              className="btn__action reverse"
              func={() =>
                handleClick({ modalName: "cancel", isShowModal: true })
              }
              icon="/trash-2.svg"
              text="İptal Et"
            />
          )}
        </td>
      );
    } else {
      return (
        <td key={`${product.id}_${header}`}>
          {productFeatures[header] || "N/A"}
        </td>
      );
    }
  });

  return <tr key={product.id}>{productData}</tr>;
}

export default ProductItem;
