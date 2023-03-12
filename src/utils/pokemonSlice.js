import { createSlice } from "@reduxjs/toolkit";

const pokemon = createSlice({
  name: "pokemon",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log(state)
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addItem,clearCart } = pokemon.actions;

export default pokemon.reducer;
