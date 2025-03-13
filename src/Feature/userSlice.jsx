import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: [],
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload);
            
            state.user.push({id:nanoid(),...action.payload})
            console.log(state.user)
        },
        editUser:(state,action)=>{
            const exisitedUser = state.user.find(user=>user.id === action.payload.id)
            if(exisitedUser){
                exisitedUser.name = action.payload.name
                exisitedUser.email = action.payload.email
            }
           
        }
       
  
    }


})

export const { addUser,editUser } = userSlice.actions
export default userSlice.reducer