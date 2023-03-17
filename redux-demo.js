const redux = require('redux');

const counterReducer = (state = { counter: 1 }, action) => {
    return (action.type === "increment" ?

        { counter: state.counter + 1 } : {
            counter: state.counter - 1
        });
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubscriber);
store.dispatch({ type: 'decrement' });
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'increment' });