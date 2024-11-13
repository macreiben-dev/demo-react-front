// src/Home.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface HelloResponse {
  message: string;
}

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const apiUrl = import.meta.env.VITE_API_SERVER_URL;

  useEffect(() => {
    axios.get<HelloResponse>(apiUrl)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error making the GET request!', error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Message is:&nbsp;{message}</p>
    </div>
  );
};

export default Home;