const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return { counter: state.counter + 1 };
    } else if (action.type === "decrement") {
        return { counter: state.counter - 1 };
    } else if (action.type === "incrementBy2") {
        return { counter: state.counter + 2 };
    } else if (action.type === "decrementBy2") {
        return { counter: state.counter - 2 };
    } else {
        return state;
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'decrementBy2' }); // counter = -1
store.dispatch({ type: 'incrementBy2' }); // counter = 1
store.dispatch({ type: 'increment' }); // counter = 2