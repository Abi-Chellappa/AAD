// App.js

import React, { useState } from 'react';
import '../assets/css/UserDetails.css';
import AdminSidebar from './AdminSidebar';

function UserDetails() {
  const [userData, setUserData] = useState([
    { id: 1, email: 'example1@example.com', password: 'password1' },
    { id: 2, email: 'example2@example.com', password: 'password2' },
    { id: 3, email: 'example3@example.com', password: 'password3' },
    { id: 4, email: 'example4@example.com', password: 'password4' },
    { id: 5, email: 'example5@example.com', password: 'password5' },
    { id: 6, email: 'example6@example.com', password: 'password6' }
  ]);

  return (
    <div className='userdetailsfull'>
        <AdminSidebar/><br/><br/>
    <div className="App">
        <div className='dhead'>
      <h1>User Data</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default UserDetails;
