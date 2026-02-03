// <== IMPORTS  ==>
import {
  CartItemListType,
  CartStoreActionsType,
  CartStoreStateType,
} from "@/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// <== CREATING CART STORE ==>
const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      // <== CART STATE ==>
      cart: [] as CartItemListType,
      // <== HAS HYDRATION FINISHED STATE ==>
      hasHydrationFinished: false,
      // <== SET HAS HYDRATION FINISHED ==>
      setHasHydrationFinished: (value: boolean) =>
        // UPDATING STATE
        set(() => ({ hasHydrationFinished: value })),
      // <== ADD ITEM TO CART ==>
      addItem: (item) =>
        // UPDATING STATE
        set((state) => {
          // CHECK IF ITEM WITH SAME ID, SIZE, AND COLOR EXISTS
          const matchIndex = state.cart.findIndex(
            (i) =>
              i.id === item.id &&
              i.selectedSize === item.selectedSize &&
              i.selectedColor === item.selectedColor,
          );
          // IF EXISTS, INCREMENT QUANTITY
          if (matchIndex !== -1) {
            // UPDATE CART WITH INCREMENTED QUANTITY
            const updated = state.cart.map((ci, idx) =>
              idx === matchIndex
                ? { ...ci, quantity: ci.quantity + item.quantity }
                : ci,
            );
            // RETURN UPDATED CART
            return { cart: updated };
          }
          // IF NOT EXISTS, ADD NEW ITEM TO CART
          return { cart: [...state.cart, item] };
        }),
      // <== REMOVE ITEM FROM CART ==>
      removeItem: (item) =>
        // UPDATING STATE
        set((state) => ({
          cart: state.cart.filter(
            (i) =>
              i.id !== item.id ||
              i.selectedSize !== item.selectedSize ||
              i.selectedColor !== item.selectedColor,
          ),
        })),
      // <== CLEAR CART ==>
      clearCart: () => set({ cart: [] }),
    }),
    // <== SSR-SAFE PERSIST CONFIG ==>
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrationFinished(true);
      },
    },
  ),
);

// <== EXPORTING CART STORE ==>
export default useCartStore;
