import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>User Data</h2>
      {data ? (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default UserData;
