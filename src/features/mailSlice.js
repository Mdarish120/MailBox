import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen:false,
    selectedMessage:null,
    sender:[]
  },

  reducers: {
    openSendMessage: (state) => {
   

      state.sendMessageIsOpen =true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen =false;
    },

   openMessage: (state,action) => {

      state.selectedMessage =action.payload;

    },

    senderData:(state,action)=>{
      state.sender=[action.payload];
    }

    
  }
 
});

export const { openSendMessage,closeSendMessage ,openMessage, senderData } =mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state?.mail.sendMessageIsOpen;

export const selectedMail= (state) => state?.mail.selectedMessage;

export const senderMail= (state) => state?.mail.sender;



export default mailSlice.reducer;
