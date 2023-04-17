import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts=> setPosts(posts.splice(0,10)))
  })
  return (
    <div className="App">
      <h1 className='heading'>Fetching Data From API</h1>
      {posts.map((post)=>(
        <div key={post.id} className='id'>
        <h1 className='title'>{post.title}</h1>
        <p className='body'>{post.body}</p>
        </div>
      ))}
     
    </div>
  );
}

export default App;
