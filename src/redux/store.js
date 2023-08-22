import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Contacts/slice';
import { filterReducer } from './Contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
