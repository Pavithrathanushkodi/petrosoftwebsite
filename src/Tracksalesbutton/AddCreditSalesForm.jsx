import React, { useState } from 'react';

const AddCreditSalesForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    totalAmount: '',
    customerName: '',
    billNumber: '',
    indendNo: '',
    vehicleNo: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    // Save logic here (e.g., send form data to API)
    console.log('Form Data:', formData);
  };

  const handleCancel = () => {
    // Clear the form or close it (can be improved as needed)
    setFormData({
      productName: '',
      quantity: '',
      totalAmount: '',
      customerName: '',
      billNumber: '',
      indendNo: '',
      vehicleNo: '',
      comments: ''
    });
  };

  return (
    <div className="add-credit-sales-form card">
      <h4>Add Credit Sales</h4>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <select
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Product</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="oil">Oil</option>
            {/* Add more options as necessary */}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Total Credit Amount</label>
          <input
            type="number"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="form-control"
            placeholder="Search Customer..."
          />
        </div>
        <div className="form-group">
          <label>Bill Number</label>
          <input
            type="text"
            name="billNumber"
            value={formData.billNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Indend No</label>
          <input
            type="text"
            name="indendNo"
            value={formData.indendNo}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Vehicle No.</label>
          <select
            name="vehicleNo"
            value={formData.vehicleNo}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Vehicle</option>
            <option value="vehicle1">Vehicle 1</option>
            <option value="vehicle2">Vehicle 2</option>
            {/* Add more vehicles as necessary */}
          </select>
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        <div className="form-buttons">
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCreditSalesForm;
