import { createSlice } from '@reduxjs/toolkit';


// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
    initialState: '',
    reducers: {
        changeUser: (state,action)=>action.payload
        
    }
})

export const {changeUser} = userNameSlice.actions;
export default userNameSlice.reducer;