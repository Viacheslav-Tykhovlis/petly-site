import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://petly-site-back.up.railway.app`;

export const fetchPets = createAsyncThunk(
  '/user/pets',
  async (_, { thunkAPI }) => {
    try {
      const response = await axios.get('/user/about');
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
      const response = await axios.post('/pets/pet', pet);
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
      const response = await axios.delete(`/pets/${petId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
