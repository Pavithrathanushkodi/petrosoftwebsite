import React, { useState } from 'react';

const AddDailySales = () => {
  const [product, setProduct] = useState('');
  const [outputNozzle, setOutputNozzle] = useState('');
  const [oldMeterValue, setOldMeterValue] = useState('');
  const [currentMeterValue, setCurrentMeterValue] = useState('');
  const [salesData, setSalesData] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Collect the data and save or process it
    const newSale = {
      product,
      outputNozzle,
      oldMeterValue,
      currentMeterValue,
      totalSale: (currentMeterValue - oldMeterValue).toFixed(2), // Total sales calculated as the difference
    };

    setSalesData([...salesData, newSale]);

    // Reset form fields after submission
    setProduct('');
    setOutputNozzle('');
    setOldMeterValue('');
    setCurrentMeterValue('');
  };

  const handleCancel = () => {
    // Reset form fields to empty
    setProduct('');
    setOutputNozzle('');
    setOldMeterValue('');
    setCurrentMeterValue('');
  };

  return (
    <div className='sales-card card'>
    <div className="add-daily-sales-form">
      <h4>Add Daily Sales</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="product">Select Product</label>
          <select
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="form-control"
            required
          >
            <option value="">--Select Product--</option>
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="outputNozzle">Output Nozzle</label>
          <input
            type="text"
            id="outputNozzle"
            value={outputNozzle}
            onChange={(e) => setOutputNozzle(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="oldMeterValue">Old Meter Value</label>
          <input
            type="number"
            id="oldMeterValue"
            value={oldMeterValue}
            onChange={(e) => setOldMeterValue(Number(e.target.value))}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentMeterValue">Current Meter Value</label>
          <input
            type="number"
            id="currentMeterValue"
            value={currentMeterValue}
            onChange={(e) => setCurrentMeterValue(Number(e.target.value))}
            className="form-control"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Add Sales</button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>

      
    </div>
    </div>
  );
};

export default AddDailySales;
