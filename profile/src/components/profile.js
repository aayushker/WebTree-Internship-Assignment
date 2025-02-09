import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      <div
        className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-200 to-white"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        
        <div
          className="relative p-1 rounded-lg"
          style={{
            background: "linear-gradient(270deg, red, orange, yellow, green, blue, indigo, violet)",
            backgroundSize: "400% 400%",
            animation: "gradient 10s ease infinite"
          }}
        >
          
          <div className="bg-white shadow-2xl overflow-hidden rounded-lg">
            
            <div className="flex p-10 gap-10">
              <></>
              <img
                className="w-2/3 md:w-1/2 object-cover rounded-l-lg"
                src={user.picture.large}
                alt="User"
              />
              <div className="w-3/5 md:w-3/5 flex flex-col justify-center space-y-6">
                <div className="font-bold text-3xl">
                  {`${user.name.first} ${user.name.last}`}
                </div>
                <p className="text-gray-700 text-lg">
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>Phone:</strong> {user.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;