import { create } from "zustand";

// In zustand we create custom hook, In zustand we can create multiple Stores
// use[hookname] eg: useCounterStore
// Store 1
export const useCounterStore = create((set) => ({
    count: 1, // Name: Initial Value
    // Actions
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({
        count: state.count === 0 ? 0 : state.count - 1
    })),
    resetCount: () => set((state) => ({count: 0}))
}));

// Store 2
export const useHandleLoginLogoutStore = create((set) => ({
    isLoggedIn: false,
    user: null,
    // Actions
    makeLogin: (userData) => set(() => ({
        isLoggedIn: true,
        user: userData
     })),
     makeLogout: () => set(() => ({
        isLoggedIn: false,
        user: null
     }))
}));