import React from 'react';

const User = ({ name }) => {
  return (
    <p style={{ fontWeight: 'bold', textAlign: 'right' }}>
      Logged in as: {name}
    </p>
  );
};

export default User;