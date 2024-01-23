import React from 'react';
import axios from 'axios';

const DemoAccount = () => {
  const handleCreateDemoAccount = () => {
    let params = {email: "tiger@test.com", password: "password"}
    axios
      .post("/sessions.json", params)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        window.location.reload();
      })
  };

  return (
    <div>
      <button onClick={handleCreateDemoAccount}>Demo Account</button>
    </div>
  );
};

export default DemoAccount;
