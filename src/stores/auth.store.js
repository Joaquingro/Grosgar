import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,

        setUser: (userData) => set({ user: userData }),
        logout: () => set({ user: null }),
      }),
      {
        getStorage: () => localStorage,
      }
    ),
    { name: "auth-store" }
  )
);

export default useAuthStore;
