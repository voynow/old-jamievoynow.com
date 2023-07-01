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
  background: '#f0f0f0', // Changed from '#121a2e' to '#f0f0f0' for a light gray background
  color: '#000000', // Changed from '#a1accd' to '#000000' for black text
  display: 'flex',
  height: 'auto',
  padding: '20px',
  flexDirection: 'column',
  alignItems: 'center',
}

const textStyle = {
  color: '#000000' // Changed from '#61dafb' to '#000000' for black text
}

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  marginBottom: '20px'
}

export default Profile;
