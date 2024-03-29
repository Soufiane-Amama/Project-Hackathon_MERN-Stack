import { create } from 'zustand';

const useURL = create((set) => ({
    path: "https://server-hackathon-mnl9.onrender.com", // Initialize with current path
    onChange: (newPath) => set({ path: newPath }), // Update path
}));

export default useURL;