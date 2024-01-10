import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import authReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer ,
    user:authReducer
  },

});
