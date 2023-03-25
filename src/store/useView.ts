import { create } from "zustand";

type viewState = {
  gridStyle: boolean;
  setGridStyle: (gridStyle: boolean) => void;
};

export const useViewState = create<viewState>((set) => ({
  gridStyle: true,
  setGridStyle: (gridStyle) => set({ gridStyle }),
}));
