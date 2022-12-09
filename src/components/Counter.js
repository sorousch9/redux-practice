import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <div className={classes.value}>COUNTER</div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
