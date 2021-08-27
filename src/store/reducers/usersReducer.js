import {createSlice} from '@reduxjs/toolkit'

const usersReducer = createSlice({
    name:'users',
    initialState:{
        users:[
            {id:1,name:'Sajib Pandit'},
            {id:2,name:'John Doe'}
        ]
    }
})

export default usersReducer.reducer