// src/pages/Trackpetrolsale.js

import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import './TrackPetrolSale.css';  // Import the CSS file for styling
import AddStockModal from '../Tracksalesbutton/Addstock';
import AddMeterReadingModal from '../Tracksalesbutton/Addmeterreadingmodal';
import AddDailySales from '../Tracksalesbutton/AddDailySales';
import AddCreditSalesForm from '../Tracksalesbutton/AddCreditSalesForm'; // Import the new form component
import 'bootstrap/dist/css/bootstrap.min.css';
import SampleTesting from '../Tracksalesbutton/SampleTesting';
import AddExpense from '../Tracksalesbutton/AddExpense';
import AddOilSales from '../Tracksalesbutton/Addoilsales';

const Trackpetrolsale = () => {
  const [activeContent, setActiveContent] = useState('Refresh');  // Default to 'Refresh' content on load

  // Function to handle content change and show appropriate form
  const handleCardClick = (content) => {
    setActiveContent(content);  // Update active content based on user click
  };

  return (
    <div className="track-petrol-sale">
      <Header />
      <div className="row">
        {/* Left Column (col-3) for Action Cards */}
        <div className="col-3">
          <div className="actions">
            <div className="action-card add-stock" onClick={() => handleCardClick('Add Stock')}>
              <h3>Add Stock</h3>
            </div>
            <div className="action-card add-meter" onClick={() => handleCardClick('Add Meter Reading')}>
              <h3>Add Meter Reading</h3>
            </div>
            <div className="action-card add-sales" onClick={() => handleCardClick('Add Daily Sales')}>
              <h3>Add Daily Sales</h3>
            </div>
            <div className="action-card add-credit" onClick={() => handleCardClick('Add Credit Sales')}>
              <h3>Add Credit Sales</h3>
            </div>
            <div className="action-card add-credit" onClick={() => handleCardClick('Sample Testing')}>
              <h3>Sample Testing</h3>
            </div>
            <div className="action-card add-expense" onClick={() => handleCardClick('Add Expense')}>
              <h3>Add Expense</h3>
            </div>
            <div className="action-card add-oil" onClick={() => handleCardClick('Add Oil Sales')}>
              <h3>Add Oil Sales</h3>
            </div>
            <div className="action-card refresh" onClick={() => handleCardClick('Refresh')}>
              <h3>Refresh</h3>
            </div>
          </div>
        </div>

        {/* Right Column (col-8) for Form Content */}
        <div className="col-8">
          {/* Conditionally Render Form/Content Based on Active Content */}
          {activeContent === 'Add Stock' && <AddStockModal />}
          {activeContent === 'Add Meter Reading' && <AddMeterReadingModal />}
          {activeContent === 'Add Daily Sales' && <AddDailySales />}
          {activeContent === 'Add Credit Sales' && <AddCreditSalesForm />} {/* Add Credit Sales Form */}
          {activeContent === 'Add Expense' && <AddExpense />}
          {activeContent === 'Add Oil Sales' && <AddOilSales />}

          {/* Render Sample Testing Component when the "Sample Testing" button is clicked */}
          {activeContent === 'Sample Testing' && <SampleTesting />}

          {/* Default "Refresh" content shown when page is loaded or when Refresh is clicked */}
          {activeContent === 'Refresh' && (
            <div className="refresh-content">
              {/* Price Report Section styled like petrol/diesel tank */}
              <div className="price-report">
                <h4>Price Report</h4>
                <div className="price-report1">
                  <div className="tank-price diesel">
                    <h4>Diesel Price</h4>
                    <p>₹93.58</p>
                  </div>
                  <div className="tank-price petrol">
                    <h4>Petrol Price</h4>
                    <p>₹101.98</p>
                  </div>
                </div>
              </div>

              {/* Sales Report Section with Rich Look */}
              <div className="sales-report">
                <h4>Today's Sales Report</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Qty Sold</th>
                      <th>Total Price</th>
                      <th>Credit Qty</th>
                      <th>Credit Total</th>
                      <th>Cash In Hand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Diesel</td>
                      <td>1926.9</td>
                      <td>₹1,80,319.30</td>
                      <td>658.2</td>
                      <td>₹61,594.36</td>
                      <td>₹1,18,724.94</td>
                    </tr>
                    <tr>
                      <td>Petrol</td>
                      <td>1804.61</td>
                      <td>₹1,84,034.14</td>
                      <td>-</td>
                      <td>-</td>
                      <td>₹1,84,034.14</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-cash">
                  <h5>Total Cash in Hand: ₹3,02,759.08</h5>
                </div>
              </div>

              {/* Tank Report Section */}
              <div className="tank-report">
                <h4>Tank Report</h4>
                <div className="tank-report1">
                  <div className="tank diesel-tank">
                    <h5>Diesel Tank</h5>
                    <div className="progress-container">
                      <p><strong>Capacity:</strong> 20,000 Liters</p>
                      <p><strong>Min Capacity:</strong> 2,000 Liters</p>
                      <p><strong>Available Stock:</strong> 11,947.91 Liters</p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '59.74%' }}></div>
                      </div>
                      <p>Fuel: 59.74%</p>
                    </div>
                  </div>

                  <div className="tank petrol-tank">
                    <h5>Petrol Tank</h5>
                    <div className="progress-container">
                      <p><strong>Capacity:</strong> 20,000 Liters</p>
                      <p><strong>Min Capacity:</strong> 2,000 Liters</p>
                      <p><strong>Available Stock:</strong> 17,720.41 Liters</p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '88.6%' }}></div>
                      </div>
                      <p>Fuel: 88.6%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trackpetrolsale;
