// app/components/Counter.tsx
'use client';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { increment, decrement } from '@/store';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold">Counter: {count}</h2>
        <div className="mt-2">
          <button onClick={() => dispatch(increment())} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">
            Increment
          </button>
          <button onClick={() => dispatch(decrement())} className="px-3 py-1 bg-red-500 text-white rounded">
            Decrement
          </button>
        </div>
      </div>
  );
}
