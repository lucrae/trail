export const formatMoney = (x: number) => {
  return x >= 0 ? `$${x}`
                : `-$${-x}`;
}
