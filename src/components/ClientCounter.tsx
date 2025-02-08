'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center p-4">
      <div>我是客户端组件</div>
      <div>{process.env.NEXT_PUBLIC_CLIENT_KET}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  )
}
