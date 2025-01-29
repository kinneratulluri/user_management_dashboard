import React from 'react';
import './App.css';
import UserList from './components/UserList/UserList';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import default styles for notifications

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>User Management Dashboard</h1>
      </header>
      <main>
        <UserList />
      </main>
      <ToastContainer position="top-right" autoClose={3000} /> {/* Toast container for top-right notifications */}
    </div>
  );
}

export default App;