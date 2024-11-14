// src/components/SampleTesting.js

import React, { useState } from 'react';

const SampleTesting = () => {
  const sampleTestingData = [
    { type: 'Diesel', name: 'Diesel-Nozzle 1', quantity: 10 },
    { type: 'Diesel', name: 'Diesel-Nozzle 2', quantity: 20 },
    { type: 'Diesel', name: 'Diesel-Nozzle 3', quantity: 30 },
    { type: 'Diesel', name: 'Diesel-Nozzle 4', quantity: 40 },
    { type: 'Petrol', name: 'Petrol-Nozzle 1', quantity: 15 },
    { type: 'Petrol', name: 'Petrol-Nozzle 2', quantity: 25 },
    { type: 'Petrol', name: 'Petrol-Nozzle 3', quantity: 35 },
    { type: 'Petrol', name: 'Petrol-Nozzle 4', quantity: 45 },
  ];

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    alert('Data saved successfully!');
  };

  const handleCancel = () => {
    setIsSaved(false);
    alert('Action cancelled.');
  };

  return (
    <div className="sample-testing-content">
      <div className="sample-testing-card card">
        <h4>Sample Testing Report</h4>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>TYPE</th>
              <th>NAME</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {sampleTestingData.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sample-testing-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>

        {isSaved && <p className="text-success">Data has been saved successfully.</p>}
      </div>
    </div>
  );
};

export default SampleTesting;
