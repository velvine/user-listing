import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const finalResult = await res.json();
    setUsers(finalResult);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <NavBar />
      <UserList users={users} />
      <Footer/>
    </div>
  );
}

export default App;
