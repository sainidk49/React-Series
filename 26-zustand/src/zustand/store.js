import { create } from 'zustand';

const useUserStore = create((set) => ({
    // State
    users: [],

    // Actions
    setUser: (user) =>
        set((state) => ({
            users: [...state.users, user],
        })),

    clearUser: () =>
        set({
            users: []
        })
}));

export default useUserStore