import React, { useState, useEffect } from 'react'

const Posts = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  return (
    <div>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h3>{resourceType}</h3>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </div>
  )
}

export default Posts
