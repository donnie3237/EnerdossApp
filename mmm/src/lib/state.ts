import { create } from "zustand";

interface BearState {
  bears: number;
  increase: () => void;
  remove: () => void;
  decrease: () => void;
}

// Create the Zustand store with TypeScript types
export const numStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  remove: () => set({ bears: 0 }),
  decrease: () => set((state) => ({ bears: state.bears - 1 })),
}));
