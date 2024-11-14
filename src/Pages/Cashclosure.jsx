import React, { useState } from 'react';
import './Cashclosure.css'; // Optional styling for CashClosure page
import Header from '../Components/Header/Header';

function CashClosure() {
  // State to track whether cash has been generated or not
  const [isGenerated, setIsGenerated] = useState(false);
  const [comment, setComment] = useState("");  // State for comment input

  // Handle generate cash click
  const handleGenerateCash = () => {
    setIsGenerated(true); // Set the state to true when button is clicked
  };

  // Handle change of comment
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="cash-closure-container">
      <Header />
      <h1>Cash Closure</h1>

      {/* Button to generate cash */}
      <button onClick={handleGenerateCash} className="generate-cash-btn btn-primary">
        Generate Cash
      </button>

      {/* Conditional rendering of content after button click */}
      {isGenerated && (
        <div className="generated-report">
          <h2>Generated Report</h2>

          {/* Petroleum Sales Section */}
          <div className="section">
            <h3 className="section-header">Petroleum Sales</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total Sold Qty</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Diesel</td>
                  <td>1926.9</td>
                  <td>₹180,319.3</td>
                </tr>
                <tr>
                  <td>Petrol</td>
                  <td>1804.61</td>
                  <td>₹184,034.14</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Oil Sales Section */}
          <div className="section">
            <h3 className="section-header">Oil Sales</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total Amount</th>
                  <th>Total Discount</th>
                  <th>Total GST</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DST-8-8-2024</td>
                  <td>₹1560</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Credit Summary Section */}
          <div className="section">
            <h3 className="section-header">Credit Summary</h3>
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Total Sale Amount</th>
                  <th>Total Received Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SM SONS MRM</td>
                  <td>₹12,258.98</td>
                  <td>₹0.00</td>
                </tr>
                <tr>
                  <td>LKS</td>
                  <td>₹2,999.24</td>
                  <td>₹0.00</td>
                </tr>
                <tr>
                  <td>Parthiban</td>
                  <td>₹21,653.48</td>
                  <td>₹20,000.00</td>
                </tr>
                <tr>
                  <td>Vinoth JCS</td>
                  <td>₹3,000.17</td>
                  <td>₹0.00</td>
                </tr>
                <tr>
                  <td>VSP BOTTLES</td>
                  <td>₹14,972.80</td>
                  <td>₹0.00</td>
                </tr>
                <tr>
                  <td>SMG Owner</td>
                  <td>₹0.00</td>
                  <td>₹29,724.00</td>
                </tr>
                <tr>
                  <td>AAKASH</td>
                  <td>₹3,999.61</td>
                  <td>₹0.00</td>
                </tr>
                <tr>
                  <td>ANNAI COLLEGE</td>
                  <td>₹2,710.08</td>
                  <td>₹2,700.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Expenses Section */}
          <div className="section">
            <h3 className="section-header">Expenses</h3>
            <table>
              <thead>
                <tr>
                  <th>Expense Type</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mill</td>
                  <td>₹68,000</td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td>₹37,316</td>
                </tr>
                <tr>
                  <td>Tea & Food Allowance</td>
                  <td>₹600</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Report and Cash Summary Section */}
          <div className="report-and-summary">
            {/* Left Column for Generated Report */}
            <div className="generated-report-column">
            
              {/* Petroleum Sales Section */}
              <div className="section">
                <h3 className="section-header">Generated Report</h3>
                <div className="input-group">
                  <label>Diesel Total Sold Qty:</label>
                  <input type="text" value="1926.9" readOnly />
                </div>
                <div className="input-group">
                  <label>Diesel Total Amount:</label>
                  <input type="text" value="₹180,319.3" readOnly />
                </div>
                <div className="input-group">
                  <label>Petrol Total Sold Qty:</label>
                  <input type="text" value="1804.61" readOnly />
                </div>
                <div className="input-group">
                  <label>Petrol Total Amount:</label>
                  <input type="text" value="₹184,034.14" readOnly />
                </div>
              </div>
            </div>

            {/* Right Column for Cash Closure Summary */}
            <div className="cash-summary-column">
              <h3 className="section-header">Cash Closure Summary</h3>
              <div className="input-group">
                <label>Starting Balance:</label>
                <input type="text" value="₹0.00" readOnly />
              </div>
              <div className="input-group">
                <label>UPI Transaction:</label>
                <input type="text" value="₹0.00" readOnly />
              </div>
              <div className="input-group">
                <label>Card Settlements:</label>
                <input type="text" value="₹0.00" readOnly />
              </div>
              <div className="input-group">
                <label>Payments:</label>
                <input type="text" value="₹0.00" readOnly />
              </div>
              <div className="input-group">
                <label>Cash Receipts:</label>
                <input type="text" value="₹52,424.00" readOnly />
              </div>
              <div className="input-group">
                <label>Petrol Supplier Bank Account:</label>
                <input type="text" value="₹0.00" readOnly />
              </div>
              <div className="input-group">
                <label>Expected Total Cash in Hand:</label>
                <input type="text" value="₹1,98,403.08" readOnly />
              </div>
              <div className="input-group">
                <label>Total Available Cash:</label>
                <input type="text" value="₹0.00" readOnly />
              </div>
              <div className="input-group">
                <label>Total Received Credit Amount:</label>
                <input type="text" value="₹52,424.00" readOnly />
              </div>
              <div className="input-group">
                <label>Excess/Shortage Amount:</label>
                <input type="text" value="₹0.00" readOnly />
              </div>
              <div className="input-group">
                <label>Comments:</label>
                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter any comments here..." />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="submit-btn">Submit Cash Closure for the Day</button>
            <button className="preview-btn">Preview Closure Report</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CashClosure;
