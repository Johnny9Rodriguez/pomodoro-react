import { create } from 'zustand';

const useSettingsStore = create((set) => ({
    isOpen: false,
    openSettings: () => set({ isOpen: true }),
    closeSettings: () => set({ isOpen: false }),
}));

export { useSettingsStore };
