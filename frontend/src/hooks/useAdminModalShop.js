import { create } from 'zustand';

const useAdminModalShop = create((set) => ({
    isModalOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}));

export default useAdminModalShop;