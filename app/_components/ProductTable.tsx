import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import ProductItem from "./ProductItem";
import { IUrunList } from "@/lib/interfaces";

type Props = {
  currentItems: IUrunList[];
};

function ProductTable({ currentItems }: Props) {
  const { urunList } = useSelector((state: RootState) => state.product);
  const [tableHeaders, setTableHeaders] = React.useState<string[]>([]);

  React.useEffect(() => {
    const headerSet = new Set<string>();

    currentItems.forEach((product) => {
      const features = product.ozellik.split("\\r\\n");
      features.forEach((feature: any) => {
        const [key, value] = feature.split(" : ");
        if (key && value && key.trim() !== "birim") {
          headerSet.add(key.trim());
        }
      });
    });

    setTableHeaders([
      "Ürün Adı",
      ...Array.from(headerSet),
      "Fiyat (KDV Dahil)",
      "Yenileme",
      "Durum",
      "İşlemler",
    ]);
  }, [urunList]);

  return (
    <table className="product__table">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentItems.map((product) => (
          <ProductItem
            key={crypto.randomUUID()}
            product={product}
            tableHeaders={tableHeaders}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
