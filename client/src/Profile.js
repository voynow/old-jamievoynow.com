// client/src/Profile.js

import React, { useEffect, useState } from 'react';

function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/test')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={profileStyle}>
      <img src="/headshot.jpg" alt="Profile" style={imageStyle} />
      {data && (
        <div>
          <h1 style={textStyle}>{data.name}</h1>
        </div>
      )}
    </div>
  );
}

const profileStyle = {
  background: '#121a2e',
  color: '#a1accd',
  display: 'flex',
  height: 'auto', // Change this to auto or provide a specific height
  padding: '20px', // Provide some padding
  flexDirection: 'column',
  alignItems: 'center',
}

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  marginBottom: '20px'
}

const textStyle = {
  color: '#61dafb'
}

export default Profile;
