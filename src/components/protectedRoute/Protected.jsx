import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Protected({ children }) {
    const user = window.localStorage.getItem('user');
    return user ? children : <Navigate to='/login' replace={true} /> 
}
