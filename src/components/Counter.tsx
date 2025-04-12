"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, RootState } from "@/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-semibold">Counter: {count}</h2>
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 text-white px-3 py-1 mr-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Decrement
      </button>
    </div>
  );
}
