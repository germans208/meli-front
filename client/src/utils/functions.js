export const currencyFormatter = (v) => {
  return v.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};
