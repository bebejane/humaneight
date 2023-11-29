'use client'
import { useEffect, useState, useRef, useCallback, useMemo, useReducer } from 'react';


const initialState = {
  count: 0,
  step: 1,
};

function reducer(state: { count: number, step: number }, action: { type: string, step: number }) {
  const { count, step } = state;
  if (action.type === 'tick') {
    return { count: count + step, step };
  } else if (action.type === 'step') {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
}

export default function Page() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick', step: 2 }); // Instead of setCount(c => c + step);
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <h1>{count}</h1>

    </>
  );


}