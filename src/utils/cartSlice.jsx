import{createSlice,current} from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // Multiple reducer function
        addItem:(state,action)=>{
            // Vanila(older Redux-DON'T mutate state,returning was mandatory)
            // // we used to create a copy of state variable then we do push
            // const newState=[...state]
            // newState.items.push(action.payload);
            //  return newState;
            // Redux used the immer library to find the difference between old and new state and gives new immutable state
            // Redux toolkit:We can confirmed mutate the state 
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        // originalState:{items:["pizza"]}
        clearCart:(state,action)=>{
            // console.log(state);
            // console.log(current(state));
            //  state=[];It won't work
            // console.log(state);
            // we are not modifying the state.We are adding the reference 
            //  it do the change locally state variable.It will not do changes in globally state variable
            // RTK:either mutate the state or return new state
            state.items.length=0;
            // return [items:[]];thins new[] wiil be repaced inside original state

        }
    }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer; 



// where we use redux
// what is difference between react-redux and react-redux-toolkit
// React dev tools
// Redux dev tools
// All technical terms
// RTK Query ,Middleware

