const formatNumbers = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatNumber(value) {
  return formatNumbers.format(value);
}

function formatPercentage(value) {
  return `${value.toFixed(2).replace(".", ",")}%`;
}

export { formatNumber, formatPercentage };
