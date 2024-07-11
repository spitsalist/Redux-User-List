import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {id: 1, name: 'John', email: 'ex@example.com'},
        {id: 2, name: 'Jane', email: 'ex@example.com'},
        {id: 3, name: 'Joe', email: 'ex@example.com'},
    ]
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default userSlice.reducer