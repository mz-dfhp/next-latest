import React from 'react'

export default function Blog() {
  return (
    <div>
      <ul className="p-4">
        {
          Array.from({ length: 10 }, (_, i) => i).map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </div>
  )
}
