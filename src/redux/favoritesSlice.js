import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;

      // Check if recipe already exists by idFood
      const exists = state.favoriterecipes.some(
        (fav) => fav.idFood === recipe.idFood
      );

      if (exists) {
        // Remove it
        state.favoriterecipes = state.favoriterecipes.filter(
          (fav) => fav.idFood !== recipe.idFood
        );
      } else {
        // Add it
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
