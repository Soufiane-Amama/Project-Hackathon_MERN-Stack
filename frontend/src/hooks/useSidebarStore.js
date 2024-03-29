import { create } from 'zustand';

const useSidebarStore = create((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}));

export default useSidebarStore;