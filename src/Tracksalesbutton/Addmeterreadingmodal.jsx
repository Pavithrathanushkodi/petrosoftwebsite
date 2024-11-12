import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa'; // Using a simple upload icon (Install react-icons package)

const AddMeterReadingCard = () => {
  const nozzles = [
    { product: 'Petrol', nozzle: 'Petrol Nozzle 1', oldMeterValue: 0, currentMeterValue: 0 },
    { product: 'Petrol', nozzle: 'Petrol Nozzle 2', oldMeterValue: 0, currentMeterValue: 0 },
    { product: 'Petrol', nozzle: 'Petrol Nozzle 3', oldMeterValue: 0, currentMeterValue: 0 },
    { product: 'Petrol', nozzle: 'Petrol Nozzle 4', oldMeterValue: 0, currentMeterValue: 0 },
    { product: 'Diesel', nozzle: 'Diesel Nozzle 1', oldMeterValue: 0, currentMeterValue: 0 },
    { product: 'Diesel', nozzle: 'Diesel Nozzle 2', oldMeterValue: 0, currentMeterValue: 0 },
    { product: 'Diesel', nozzle: 'Diesel Nozzle 3', oldMeterValue: 0, currentMeterValue: 0 },
    { product: 'Diesel', nozzle: 'Diesel Nozzle 4', oldMeterValue: 0, currentMeterValue: 0 },
  ];

  const [file, setFile] = useState(null);
  const [meterData, setMeterData] = useState(nozzles);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log('Submitted meter data:', meterData);
  };

  const handleMeterChange = (index, field, value) => {
    const newMeterData = [...meterData];
    newMeterData[index][field] = value;
    setMeterData(newMeterData);
  };

  return (
    <div className="card add-meter-reading-card">
      <div className="card-header">
        <h3 className="card-title">Add Meter Reading</h3>
      </div>
      <div className="card-body">
        {/* File Upload Section */}
        <div className="upload-section">
          <div className="upload-button" onClick={() => document.getElementById('file-upload').click()}>
            <FaUpload size={20} />
            <span>{file ? file.name : 'Drag or click to upload a file'}</span>
          </div>
          <input
            type="file"
            id="file-upload"
            className="file-upload"
            onChange={handleFileChange}
          />
        </div>

        {/* Drag & Drop File Upload Area */}
        <div
          className="drag-drop-area"
          onDrop={(e) => {
            e.preventDefault();
            handleFileChange(e);
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          Drag & Drop your file here
        </div>

        {/* Table with Meter Data */}
        <div className="meter-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Nozzle Name</th>
                <th>Old Metered Value</th>
                <th>Current Metered Value</th>
              </tr>
            </thead>
            <tbody>
              {meterData.map((data, index) => (
                <tr key={index}>
                  <td>{data.product}</td>
                  <td>{data.nozzle}</td>
                  <td>
                    <input
                      type="number"
                      value={data.oldMeterValue}
                      onChange={(e) => handleMeterChange(index, 'oldMeterValue', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.currentMeterValue}
                      onChange={(e) => handleMeterChange(index, 'currentMeterValue', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="card-footer">
          <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddMeterReadingCard;
