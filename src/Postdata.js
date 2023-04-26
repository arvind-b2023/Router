import axios from 'axios';
import React, { useState } from 'react';

function Postdata() {
  const [data, setData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify({ email: data }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    );
    const result = await response.json();
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setData(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Postdata;