const { createStore } = require('redux');

const initialState = [
    {
    anime: "Dragonball Z",
    released: "1988",
    genre: "action"
    },
    {
    anime: "Sword Art Online",
    released: "2010",
    genre: "fantasy/action"
    },
    {
    anime: "Overlord",
    released: "2014",
    genre: "Isikei"
    }
]

const add = (data) => {
    return {
        type: 'ADD',
        data: data
    }
}

const remove = (index) => {
    return {
        type: 'REMOVE',
        data: index
    }
}

const myReducer = (state = initialState, action) => {
    const newState = [...state];
    if(action.type ==='ADD'){
        return [
            ...state, action.data
        ]
    }
    if(action.type ==='REMOVE'){
        let newState = state
        console.log(action.data)
        newState.splice(action.data, 1)
        console.log(newState)
        return [
            ...newState
        ]
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log('Contact added', (store.getState()));
})

const newObj = {
    anime: "Demon Slayer",
    released: "2019",
    genre: "Action/Fantasy"
}

store.dispatch(add(newObj));
store.dispatch(remove(1));
store.dispatch(add(newObj));