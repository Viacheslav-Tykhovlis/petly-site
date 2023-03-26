import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://petly-site-back.up.railway.app`;

export const fetchPets = createAsyncThunk(
  '/user/pets',
  async (_, { thunkAPI }) => {
    try {
      const response = await axios.get('/user/about');
      return response.data.allUserPets;
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
      const response = await axios.post('/pets', pet);
      return response.data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (_id, { thunkAPI }) => {
    try {
      const response = await axios.delete(`/pets/${_id}`);
      return response.data.allUserPets;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
