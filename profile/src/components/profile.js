import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={user.picture.large} alt="User" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
          <p className="text-gray-700 text-base">
            <strong>Gender:</strong> {user.gender}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;