'use client'

import { countStore } from '@/store/count'

export default function Counter() {
  const { count, decrement, increment } = countStore()
  return (
    <div>
      {count}
      <button className="px-2 py-1 rounded-md bg-blue-500 text-white" type="button" onClick={() => decrement(1)}>+</button>
      <button className="px-2 py-1 rounded-md bg-blue-500 text-white" type="button" onClick={() => increment(1)}>-</button>
    </div>
  )
}
