import React from 'react';

const PracticeMode = ({ loci }) => {
  return (
    <div>
      {loci.map(locus => (
        <div key={locus._id}>
          <h3>{locus.description}</h3>
          {/* Recall and track progress */}
        </div>
      ))}
    </div>
  );
};

export default PracticeMode;
