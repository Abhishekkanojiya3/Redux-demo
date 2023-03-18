import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './store/Logic';

const Counter = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())

  }
  const increaseHandler = () =>{
    dispatch(counterActions.increase(5))
  }
  const decrementHandleBy5 = () =>{
    dispatch(counterActions.decrementby5())
  }
  const counter = useSelector(state => state.counter.counter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <button onClick = {incrementHandler}>Increment</button>
      <button onClick = {decrementHandler}>Decrement</button>
      <button onClick = {increaseHandler}>IncrementBy5</button>
      <button onClick = {decrementHandleBy5}>DecrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
