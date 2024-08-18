import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [palaces, setPalaces] = useState([]);

  const fetchPalaces = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/api/memory-palaces', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setPalaces(response.data);
  };

  useEffect(() => {
    fetchPalaces();
  }, []);

  return (
    <div>
      {palaces.map(palace => (
        <div key={palace._id}>
          <h2>{palace.name}</h2>
          <p>{palace.description}</p>
          {/* Link to MemoryPalaceView */}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
