import { create } from "zustand";

interface useStoreModalInterStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

};

export const useStoreModal = create<useStoreModalInterStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));