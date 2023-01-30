import { atom, selector } from "recoil";

export const counterState = atom({
  key: "countState",
  default: 0,
});

export const vatCountState = selector({
  key: "vatCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const value = get(counterState);
    let priceWithVat = value * 1.17;
    return priceWithVat;
  },
});

export const complexCountIncrement = selector({
  key: "complexCountIncrement",
  get: ({ get }) => {
    const value = get(counterState);
    return value;
  },
  set: ({ set }, newValue) => set(counterState, (newValue * 9) / 5 + 200),
});
