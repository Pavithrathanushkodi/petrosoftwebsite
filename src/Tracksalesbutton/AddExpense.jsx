// src/components/AddExpense.js

import React, { useState } from 'react';

const AddExpense = () => {
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState(''); // Added state for comment
  const [isSaved, setIsSaved] = useState(false);

  // Expense Type options
  const expenseTypes = ['Fuel', 'Maintenance', 'Salaries', 'Miscellaneous'];

  // Handle Save
  const handleSave = () => {
    if (!expenseType || !amount) {
      alert('Please fill in all fields.');
      return;
    }
    // Save logic goes here (e.g., API call)
    setIsSaved(true);
    alert('Expense saved successfully!');
  };

  // Handle Cancel
  const handleCancel = () => {
    setExpenseType('');
    setAmount('');
    setComment(''); // Reset the comment state
    setIsSaved(false);
    alert('Action cancelled.');
  };

  return (
    <div className="add-expense-content">
      <div className="add-expense-card card">
        <h4>Add Expense</h4>

        {/* Expense Form */}
        <div className="form-group">
          <label htmlFor="expenseType">Expense Type</label>
          <select
            id="expenseType"
            className="form-control"
            value={expenseType}
            onChange={(e) => setExpenseType(e.target.value)}
          >
            <option value="">Select an Option</option>
            {expenseTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Comment Box */}
        <div className="form-group">
          <label htmlFor="comment">Comment (Optional)</label>
          <textarea
            id="comment"
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4" // Set number of rows for the textarea
          />
        </div>

        {/* Save and Cancel buttons */}
        <div className="expense-actions">
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel
          </button>
        </div>

        {/* Success Message */}
        {isSaved && <p className="text-success">Expense has been saved successfully.</p>}
      </div>
    </div>
  );
};

export default AddExpense;
