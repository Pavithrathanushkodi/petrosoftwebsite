import React, { useState } from 'react';
import './CreditManagement.css'; 
import Header from '../Components/Header/Header';

function CreditManagement() {
  const [activeTab, setActiveTab] = useState("customerCredits");
  const [customers] = useState([
    { id: 1, name: "SM SONS MRM", email: "smg.vignesh@gmail.com" },
    { id: 2, name: "CENTRAL UNIVERSITY TVR", email: "example@university.com" },
    
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
  const handleCustomerChange = (e) => {
    setSelectedCustomer(e.target.value);
  };

  // Handle the date changes
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    // Implement search functionality here (filtering or API call)
    console.log("Searching for data between", startDate, "and", endDate, "for customer", selectedCustomer);
  };

  return (
    <>
    <Header/>
    <div className="customer-credit-container">
      <h1>Customer Credit Management</h1>

      {/* Tab Buttons */}
      <div className="tabs">
        <button
          onClick={() => handleTabClick("customerCredits")}
          className={`tab-btn ${activeTab === "customerCredits" ? "active" : ""}`}
        >
          Customer Credits
        </button>
        <button
          onClick={() => handleTabClick("creditSummaryReport")}
          className={`tab-btn ${activeTab === "creditSummaryReport" ? "active" : ""}`}
        >
          Credit Summary Report
        </button>
      </div>

      {/* Customer Credit Summary Report Tab */}
      {activeTab === "customerCredits" && (
        <div className="customer-credit-content card">
          <h2>Customer Credit Summary Report</h2>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Credit Limit</th>
                <th>Total Credit Amount</th>
                <th>Total Received Amount</th>
                <th>Outstanding Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SM SONS MRM</td>
                <td>smg.vignesh@gmail.com</td>
                <td>7708587406</td>
                <td>Due Pending</td>
                <td>₹1,00,00,000.00</td>
                <td>₹41,38,266.03</td>
                <td>₹1,08,384.00</td>
                <td>₹40,29,882.03</td>
                <td className='buttons'>
                  <button className="action-btn">Add Payment</button>
                  <button className="action-btn">View Receipt</button>
                </td>
              </tr>
              <tr>
                <td>CENTRAL UNIVERSITY TVR</td>
                <td>example@university.com</td>
                <td>1234567890</td>
                <td>Over Due</td>
                <td>₹0.00</td>
                <td>₹14,99,790.96</td>
                <td>₹2,46,200.00</td>
                <td>₹12,53,590.96</td>
                <td className="buttons">
                  <button className="action-btn">Add Payment</button>
                  <button className="action-btn">View Receipt</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Credit Summary Report Tab */}
      {activeTab === "creditSummaryReport" && (
        <div className="credit-summary-report card">
          <h2>Credit Summary Report</h2>
          <div className="filter-form">
            <div className="form-group">
              <label>Select Customer</label>
              <select
                value={selectedCustomer}
                onChange={handleCustomerChange}
                className="form-control"
              >
                <option value="">Select Customer</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="form-control"
              />
            </div>

            <button onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default CreditManagement;
