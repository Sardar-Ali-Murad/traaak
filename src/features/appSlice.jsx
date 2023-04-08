import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  contactForm:false
};


const appSlice = createSlice({
  name: "store",
  initialState,

  reducers: {
     openContactForm:(state)=>{
        state.contactForm=true
     },
     closeContactForm:(state)=>{
        state.contactForm=false
     },
  }
});

export const {
  openContactForm,
  closeContactForm
} = appSlice.actions;

export default appSlice.reducer;
