import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import Notiflix from 'notiflix';
// import { notifySettings } from '../../utils/notifySettings';


export const fetchPets = createAsyncThunk(
  '/user/pets',
  async (_, { thunkAPI }) => {
    try {
      const response = await API.get('/user/about');
      // console.log(response.data.data.userWithPet);
      return response.data.data.userWithPet;
    } catch (error) {
      console.log('fetchPetsError:', error.message);
      return thunkAPI(error.message);
    }
  },
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (pet, { thunkAPI }) => {
    try {
      console.log(pet);
      const response = await API.post('/pets/pet', pet);
      return response.data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);

export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (petId, thunkAPI) => {
    try {
      const response = await API.delete(`/pets/${petId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
