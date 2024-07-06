// src/Success.js
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const Success = () => {
  const { isAuthenticated, user, isLoading, error } = useAuth0();

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log("user:", user);
    console.log("isLoading:", isLoading);
    console.log("error:", error);
  }, [isAuthenticated, user, isLoading, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Logged in successfully</h1>
          <p>Welcome, {user.name}</p>
          <LogoutButton />
        </div>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
};

export default Success;
