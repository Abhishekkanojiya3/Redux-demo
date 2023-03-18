import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement' })

    }
    const incrementHandlerBy5 = () => {
        dispatch({ type: 'incrementby5' })
    }
    const decrementHandleBy5 = () => {
        dispatch({ type: 'decrementby5' })
    }
    const counter = useSelector(state => state.counter);
    const toggleCounterHandler = () => {};

    return ( <
        main className = { classes.counter } >
        <
        h1 > Redux Counter < /h1> <
        div className = { classes.value } > { counter } < /div> <
        button onClick = { incrementHandler } > Increment < /button> <
        button onClick = { decrementHandler } > Decrement < /button> <
        button onClick = { incrementHandlerBy5 } > IncrementBy5 < /button> <
        button onClick = { decrementHandleBy5 } > DecrementBy5 < /button>


        <
        button onClick = { toggleCounterHandler } > Toggle Counter < /button> <
        /main>
    );
};

export default Counter;