// src/pages/Trackpetrolsale.js

import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import './TrackPetrolSale.css';  // Import the CSS file for styling
import AddStockModal from '../Tracksalesbutton/Addstock';
import AddMeterReadingModal from '../Tracksalesbutton/Addmeterreadingmodal';
import AddDailySales from '../Tracksalesbutton/AddDailySales';
import AddCreditSalesForm from '../Tracksalesbutton/AddCreditSalesForm'; // Import the new form component
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
   
      {/* Left Column (col-3) for Action Cards */}
      <div className="actions">
        <ActionCard title="Add Stock" onClick={() => handleCardClick('Add Stock')} />
        <ActionCard title="Add Meter Reading" onClick={() => handleCardClick('Add Meter Reading')} />
        <ActionCard title="Add Daily Sales" onClick={() => handleCardClick('Add Daily Sales')} />
        <ActionCard title="Add Credit Sales" onClick={() => handleCardClick('Add Credit Sales')} />
        <ActionCard title="Sample Testing" onClick={() => handleCardClick('Sample Testing')} />
        <ActionCard title="Add Expense" onClick={() => handleCardClick('Add Expense')} />
        <ActionCard title="Add Oil Sales" onClick={() => handleCardClick('Add Oil Sales')} />
        <ActionCard title="Refresh" onClick={() => handleCardClick('Refresh')} />
      </div>

      {/* Right Column (col-8) for Form Content */}
      <div className="form-content">
        {/* Conditionally Render Form/Content Based on Active Content */}
        {activeContent === 'Add Stock' && <AddStockModal />}
        {activeContent === 'Add Meter Reading' && <AddMeterReadingModal />}
        {activeContent === 'Add Daily Sales' && <AddDailySales />}
        {activeContent === 'Add Credit Sales' && <AddCreditSalesForm />}
        {activeContent === 'Add Expense' && <AddExpense />}
        {activeContent === 'Add Oil Sales' && <AddOilSales />}
        {activeContent === 'Sample Testing' && <SampleTesting />}

        {/* Default "Refresh" content shown when page is loaded or when Refresh is clicked */}
        {activeContent === 'Refresh' && (
          <div className="refresh-content">
            {/* Price Report Section */}
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

            {/* Sales Report Section */}
            <div className="sales-report">
              <h4>Today's Sales Report</h4>
              <div className='tab-but'>
                <table className="table price-table">
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
            </div>

            {/* Tank Report Section */}
            <div className="tank-report">
              <h4>Tank Report</h4>
              <div className="tank-report1">
                <div className="tank diesel-tank">
                  
                  <div className="progress-container">
                    <h5>Diesel Tank</h5>
                    <h4>Capacity:</h4>
                    <h3>20,000 Litres</h3>
                    <h4>Min Capacity:</h4>
                    <h3>2,000 Liters</h3>
                    <h4>Available Stock:</h4>
                    <h3>11,947.91 Liters</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '59.74%' }}></div>
                    </div>
                    <p>Fuel: 59.74%</p>
                  </div>
                </div>

                <div className="tank petrol-tank">
                 
                  <div className="progress-container">
                  <h5>Petrol Tank</h5>
                  <h4>Capacity:</h4>
                    <h3>20,000 Litres</h3>
                    <h4>Min Capacity:</h4>
                    <h3>2,000 Liters</h3>
                    <h4>Available Stock:</h4>
                    <h3>17,947.91 Liters</h3>
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
  );
};

// Action Card Component
const ActionCard = ({ title, onClick }) => {
  return (
    <div className="action-card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default Trackpetrolsale;
