import {configureStore} from '@reduxjs/toolkit';
import cartreducer from './Slice' 

const store =configureStore({
    reducer:{
        cart:cartreducer

    }

})

export type RootState = ReturnType<typeof store.getState>

export default store