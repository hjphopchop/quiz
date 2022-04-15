import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    questions:[],
    activeQuestions:{},
}



export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setQuestions: (state, action) => {
           
            state.questions = action.payload
        },
        setRandom: (state,action) => {
            state.activeQuestions = state.questions[action.payload]
        }
    },
})

export const fetchQuestions = (data) => async(dispatch) =>
{
    try{
        const response = await axios.get(`http://localhost:3001/products/`)
        dispatch(setQuestions(response.data))
    }
    catch(error){
        throw new Error(error);

    }
}

export const randomQuestions =()=> (dispatch) => {
    function getRandom (min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*
        (max-min)) + min
    }
    let random = getRandom(0,29)

    dispatch(setRandom(random));

}

   

export const {setQuestions , setRandom} = counter.actions
export default counter.reducer