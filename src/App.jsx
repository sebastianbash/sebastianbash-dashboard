import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Protected from './components/protectedRoute/Protected';
import Validated from './components/validatedRoute/Validated';
import Dashboard from './components/views/dashboard/Dashboard';
import Login from './components/views/login/Login';
import Signup from './components/views/signup/Signup';


function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />
      <Route path="*" element={<h2>Page not found 404</h2>} />
    </Routes>
  );
}

export default App;
