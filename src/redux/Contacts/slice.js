import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
 axios.defaults.baseURL = 'https://64d92321e947d30a2609f14a.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async() => {
  const response = await axios.get('');
  return response.data
});

export const addContact = createAsyncThunk('contacts/addContact', async(contactData) => {
  const response = await axios.post('', contactData);
  return response.data
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId)=>{
  await axios.delete(``);
  return contactId;
})


const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contactList: [],
  isLoading: false,
error: null,
 },
  reducers: {},
  extraReducers:(builder) => {
   builder
   .addCase(fetchContacts.pending,(state) => {
    state.isLoading = true;
   })
   .addCase(fetchContacts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.contacts = action.payload;
   })
   .addCase(fetchContacts.rejected, (state,action) => {
    state.isLoading = false;
    state.error = action.error.message;
   })
   .addCase(addContact.fulfilled, (state,action) => {
    state.contacts.push(action.payload);
   })
   .addCase(deleteContact.fulfilled, (state, action) => {
    state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
   })
  }
});


export const contactReducer = contactSlice.reducer; //Цей рядок export const userReducer = userSlice.reducer; використовується для експорту редуктора, який був створений за допомогою функції createSlice з бібліотеки @reduxjs/toolkit
