import React from 'react';
import axios from 'axios';

const DemoAccount = () => {
  const handleCreateDemoAccount = async () => {
    try {
      const response = await axios.post('/create_demo_account');
      // Handle success, store token, etc.
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <button onClick={handleCreateDemoAccount}>Demo Account</button>
    </div>
  );
};

export default DemoAccount;
