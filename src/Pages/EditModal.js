import React, { useState } from 'react';

const EditModal = ({ entry, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: entry.name,
    totalAmount: entry.totalAmount,
    status: entry.status,
    closedDate: entry.closedDate,
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle save
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Sales Entry</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label>Total Amount:</label>
          <input
            type="number"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
          />
          <br />
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Close">Close</option>
          </select>
          <br />
          <label>Closed Date:</label>
          <input
            type="date"
            name="closedDate"
            value={formData.closedDate}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
