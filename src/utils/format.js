// eslint-disable-next-line import/prefer-default-export
export function abbreviatedAddress(address) {
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
}
