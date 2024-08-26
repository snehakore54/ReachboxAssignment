import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://example.com/api/your-endpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;
