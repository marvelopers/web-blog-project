import React from 'react';

interface AppProps{
  name : string,
  age: number,
}

function App ({name, age}:AppProps) {
  
  return (
    <>
    <div>
      <p>{name}</p>
    </div>
    </>
  )
}

export default App;
