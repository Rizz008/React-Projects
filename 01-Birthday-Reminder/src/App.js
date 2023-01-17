import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [user, setUser] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>{user.length} birthdays today</h3>
        <List user={user} />
        <button className="btn" onClick={() => setUser([])}>clear all</button>
      </div>
    </main>
  );
}

export default App;
