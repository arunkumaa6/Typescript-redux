import { createSlice } from "@reduxjs/toolkit";
import product from './product.json'

interface setState{
  addToCart:any
  favCart:any
  products:any
}

const initialState :setState={
  addToCart:[],
  favCart:[],
  products:product
}

export  const cartSlice=createSlice({

  name:"addToCart",
  initialState,
  reducers: {
    

  }



})

export default  cartSlice.reducer