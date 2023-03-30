import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet, addPet } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const fetchPetsSucceesReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

// const addPetSucceesReducer = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(action.payload);
// };

const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPets.pending, pendingReducer)
      .addCase(fetchPets.fulfilled, fetchPetsSucceesReducer)
      .addCase(fetchPets.rejected, rejectedReducer)
      .addCase(addPet.pending, pendingReducer)
      .addCase(addPet.fulfilled, fetchPetsSucceesReducer)
      .addCase(addPet.rejected, rejectedReducer)
      .addCase(deletePet.pending, pendingReducer)
      .addCase(deletePet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { items } = state;
        const index = items.findIndex(pet => pet._id === action.payload.id);
        items.splice(index, 1);
      })
      .addCase(deletePet.rejected, rejectedReducer);
  },
});

export const petsReducer = petsSlice.reducer;
