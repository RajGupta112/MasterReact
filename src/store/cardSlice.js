import { createSlice } from "@reduxjs/toolkit"
const cartSlice=createSlice({
  name:'cart',
  initialState:{
    cartitems:[]
  },  
  reducers:{
    addItems:(state,action)=>{
    state.cartitems.push(action.payload)
    },
    removeItem:(state,action)=>{
    state.cartitems.pop();
    },
    clearItem:(state,action)=>{
    state.cartitems.length=0;
    }
  }
});

export const {addItems,removeItem,clearItem}=cartSlice.actions;

export default cartSlice.reducer;