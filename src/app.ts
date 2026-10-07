interface TotalPriceProps {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: TotalPriceProps): number => {
  const discountedPrice = price - (price * discount) / 100;

  return Math.round(isInstallment ? discountedPrice / months : discountedPrice);
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
