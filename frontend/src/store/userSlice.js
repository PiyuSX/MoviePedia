import { createSlice } from '@reduxjs/toolkit'

// Load user from localStorage on initial state
const getUserFromLocalStorage = () => {
    try {
        const userData = localStorage.getItem('user')
        return userData ? JSON.parse(userData) : null
    } catch (error) {
        console.error('Error parsing user data:', error)
        return null
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: getUserFromLocalStorage()
    },
    reducers:{
        setUser:(state,action) => {
            state.user = action.payload
        }
    }
})
export const {setUser} = userSlice.actions
export default userSlice.reducer