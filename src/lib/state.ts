import { create } from "zustand";

export const useStore = create((set) => ({
  entities: [],
  setEntities: (newEntities: any) => set({ entities: newEntities }),
}));
