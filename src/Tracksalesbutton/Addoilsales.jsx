// src/components/AddOilSales.js

import React, { useState } from 'react';

const AddOilSales = () => {
  // State for storing product rows
  const [salesData, setSalesData] = useState([
    { productName: '', unitPrice: '', quantity: '', total: 0 },
  ]);
  const [paymentMode, setPaymentMode] = useState('');

  // Product options for dropdown
  const products = ['Diesel', 'Petrol', 'Lubricants'];

  // Payment modes
  const paymentModes = ['Cash', 'Credit', 'Card'];

  // Handle change in product row
  const handleInputChange = (index, field, value) => {
    const newSalesData = [...salesData];
    newSalesData[index][field] = value;

    // Calculate total price dynamically
    if (field === 'unitPrice' || field === 'quantity') {
      const unitPrice = parseFloat(newSalesData[index].unitPrice) || 0;
      const quantity = parseFloat(newSalesData[index].quantity) || 0;
      newSalesData[index].total = unitPrice * quantity;
    }

    setSalesData(newSalesData);
  };

  // Add a new row
  const addRow = () => {
    setSalesData([
      ...salesData,
      { productName: '', unitPrice: '', quantity: '', total: 0 },
    ]);
  };

  // Remove a row
  const removeRow = (index) => {
    const newSalesData = salesData.filter((_, i) => i !== index);
    setSalesData(newSalesData);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate the form
    if (!paymentMode || salesData.some(row => !row.productName || !row.unitPrice || !row.quantity)) {
      alert('Please fill in all fields.');
      return;
    }

    const grandTotal = salesData.reduce((sum, row) => sum + row.total, 0);

    alert(`Form Submitted\nGrand Total: ₹${grandTotal}\nPayment Mode: ${paymentMode}`);
  };

  return (
    <div className="add-oil-sales-content">
      <div className="add-oil-sales-card card">
        <h4>Add Oil Sales</h4>
        
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    value={row.productName}
                    onChange={(e) => handleInputChange(index, 'productName', e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Product</option>
                    {products.map((product, idx) => (
                      <option key={idx} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={row.unitPrice}
                    onChange={(e) => handleInputChange(index, 'unitPrice', e.target.value)}
                    className="form-control"
                    placeholder="Unit Price"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                    className="form-control"
                    placeholder="Quantity"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.total}
                    readOnly
                    className="form-control"
                    placeholder="Total"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeRow(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add new row button */}
        <button type="button" className="btn row-btn" onClick={addRow}>
          Add Row
        </button>

        {/* Payment Mode */}
        <div className="form-group">
          <label htmlFor="paymentMode">Payment Mode</label>
          <select
            id="paymentMode"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            className="form-control"
          >
            <option value="">Select Mode</option>
            {paymentModes.map((mode, index) => (
              <option key={index} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="submit-actions">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOilSales;
