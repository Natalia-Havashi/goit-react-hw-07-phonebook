import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './actions';
import {
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from 'redux/handlers';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactReducer = contactSlice.reducer; //Цей рядок export const userReducer = userSlice.reducer; використовується для експорту редуктора, який був створений за допомогою функції createSlice з бібліотеки @reduxjs/toolkit
