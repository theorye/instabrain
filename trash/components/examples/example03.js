

const initialState3 = 0;
const reducer3 = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'set': return action.count;
    default: throw new Error('Unexpected action');
  }
};





const Example03 = () => {
  const [count1, dispatch1] = useReducer(reducer3, initialState3);
  const [count2, dispatch2] = useReducer(reducer3, initialState3);
  return (
    <>
      <div>
        {count1}
        <button onClick={() => dispatch1({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch1({ type: 'decrement' })}>-1</button>
        <button onClick={() => dispatch1({ type: 'set', count: 0 })}>reset</button>
      </div>
      <div>
        {count2}
        <button onClick={() => dispatch2({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch2({ type: 'decrement' })}>-1</button>
        <button onClick={() => dispatch2({ type: 'set', count: 0 })}>reset</button>
      </div>
    </>
  );
};