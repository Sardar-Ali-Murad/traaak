import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  contactForm:false,
  ham:true
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
     closeHam:(state)=>{
        state.ham=false
     },
     openHam:(state)=>{
        state.ham=true
     },
  }
});

export const {
  openContactForm,
  closeContactForm,
  openHam,
  closeHam
} = appSlice.actions;

export default appSlice.reducer;
