export const formatPrice = (price: any) => {
  return `₺${parseFloat(price)
    .toLocaleString("tr-TR", { style: "currency", currency: "TRY" })
    .slice(1)} (Aylık)`;
};

export const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
