import { create } from 'zustand';

const useBigAdminSidebar = create((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}));

export default useBigAdminSidebar;