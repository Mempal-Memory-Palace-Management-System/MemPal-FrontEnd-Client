import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MemoryPalaceView = () => {
  const { id } = useParams();
  const [palace, setPalace] = useState({});
  const [loci, setLoci] = useState([]);

  const fetchPalace = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`http://localhost:5000/api/memory-palaces/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setPalace(response.data);
    setLoci(response.data.loci);
  };

  useEffect(() => {
    fetchPalace();
  }, [id]);

  return (
    <div>
      <h1>{palace.name}</h1>
      <p>{palace.description}</p>
      {loci.map(locus => (
        <div key={locus._id}>
          <span>{locus.description}</span>
          {/* Options to edit or delete locus */}
        </div>
      ))}
    </div>
  );
};

export default MemoryPalaceView;
